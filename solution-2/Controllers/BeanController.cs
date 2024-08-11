using Microsoft.AspNetCore.Mvc;
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
	public IActionResult All()
	{
		_logger.LogInformation("Get all beans");
		var allTheBeans = _dbContext.Beans.Select(x => x).ToList();
		_logger.LogInformation($"found '{allTheBeans.Count}' beans");
		return new JsonResult(allTheBeans);
	}

	[Route("/[controller]/{id}")]
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

	// [HttpGet("{id}")]
	// public IEnumerable<Beans> Get(Guid id)
	// {
	// 	this._logger.LogInformation($"Attempting to retrieve bean - {id}");
	// 	return Enumerable.Range(1, 5).Select(index => new WeatherForecast
	// 	{
	// 		Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
	// 		TemperatureC = Random.Shared.Next(-20, 55),
	// 		Summary = Summaries[Random.Shared.Next(Summaries.Length)]
	// 	})
	// 	.ToArray();
	// }


}
