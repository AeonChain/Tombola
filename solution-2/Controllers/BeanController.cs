using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using solution_2.Models;

namespace solution_2.Controllers;

[ApiController]
[Route("[controller]")]
public class BeanController : ControllerBase
{
	private readonly ILogger<BeanController> _logger;
	private readonly BeansContext _dbContext;

	public BeanController(ILogger<BeanController> logger, BeansContext context)
	{

		_logger = logger;
		_dbContext = context;
	}

	[HttpGet("/all")]
	public IEnumerable<Bean> All()
	{
		_logger.LogInformation("Get all beans");
		var allTheBeans = _dbContext.Beans.Select(x => x).ToList();
		_logger.LogInformation(JsonConvert.SerializeObject(allTheBeans));
		return allTheBeans;
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
