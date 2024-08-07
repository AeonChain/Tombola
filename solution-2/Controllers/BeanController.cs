using Microsoft.AspNetCore.Mvc;
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
		this._logger.LogInformation("Get all beans");
		return _dbContext.Beans.Select(x => x).ToList();
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
