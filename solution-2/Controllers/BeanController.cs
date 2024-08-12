using Humanizer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using solution_2.Models;

namespace solution_2.Controllers;

[ApiController]
[Route("[controller]/[action]")]
public class BeanController : ControllerBase
{
	private readonly ILogger<BeanController> _logger;
	private readonly BeansContext _dbContext;

	public BeanController(ILogger<BeanController> logger, BeansContext context)
	{

		_logger = logger;
		_dbContext = context;
	}

	[HttpGet]
	public IActionResult All(string? searchTerm)
	{

		var hasSearchTerm = !string.IsNullOrWhiteSpace(searchTerm);
		_logger.LogInformation("Get all beans" + (hasSearchTerm ? $" with search term:'{searchTerm}'" : ""));

		var allTheBeans = _dbContext.Beans.Where(x => !hasSearchTerm || EF.Functions.Like(x.Name.ToLower(), '%' + searchTerm.ToLower() + '%')).Select(x => x).ToList();
		_logger.LogInformation($"found '{allTheBeans.Count}' beans");
		return new JsonResult(allTheBeans);
	}

	[Route("/[controller]/{id}")]
	[HttpGet]
	public IActionResult Index(string id)
	{
		_logger.LogInformation($"Get bean with id: '{id}'");
		var beans = _dbContext.Beans.Where(x => x.Id == id).ToList();
		if (beans.Count == 0)
		{
			_logger.LogError($"No beans found for id: '{id}'");
			return NotFound();
		}
		if (beans.Count > 1)
		{
			_logger.LogError($"Found multiple beans with the same id: '{id}', returning first instance");
		}
		var bean = beans.First();
		return new JsonResult(bean);
	}

	[HttpGet]
	[Route("/[controller]/botd")]
	public IActionResult BOTD()
	{
		_logger.LogInformation($"Getting BOTD");
		var allBOTD = _dbContext.Beans.Where(x => x.IsBOTD).ToList();
		var BOTD = allBOTD.First();
		var relevantBOTDTimeframe = DateTime.Now.AddDays(-1).AtMidnight();
		_logger.LogInformation(BOTD?.Id, relevantBOTDTimeframe.ToString("dd/MM/yy hh:mm"));
		if (BOTD == null || !BOTD.LastInstanceOfBOTD.HasValue || BOTD.LastInstanceOfBOTD > relevantBOTDTimeframe)
		{
			var newBOTDId = _dbContext.Beans.FromSql($"SELECT _id, RANDOM() FROM beans ORDER BY RANDOM(), _id").Select(x => x.Id).First();
			var newBOTD = _dbContext.Beans.SingleOrDefault(x => x.Id == newBOTDId);
			if (newBOTD == null)
			{
				_logger.LogError($"New BOTD cannot be selected with id: '{newBOTDId}'");
			}
			else
			{
				newBOTD.IsBOTD = true;
				newBOTD.LastInstanceOfBOTD = DateTime.Now.AtMidnight();
				allBOTD.ForEach(x => x.IsBOTD = false);
				_dbContext.SaveChanges();
				return new JsonResult(newBOTD);
			}
			_logger.LogInformation($"new BOTD: {newBOTDId}");
		}
		return new JsonResult(BOTD);
	}
}
