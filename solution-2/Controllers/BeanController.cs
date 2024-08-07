using Microsoft.AspNetCore.Mvc;

namespace solution_2.Controllers;

[ApiController]
[Route("[controller]")]
public class BeanController : ControllerBase
{
	private readonly ILogger<BeanController> _logger;

	public BeanController(ILogger<BeanController> logger)
	{
		_logger = logger;
	}

	// [HttpGet("/all")]
	// public IEnumerable<Beans> All()
	// {
	// 	this._logger.LogInformation("Get all beans");
	// 	return Enumerable.Range(1, 5).Select(index => new WeatherForecast
	// 	{
	// 		Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
	// 		TemperatureC = Random.Shared.Next(-20, 55),
	// 		Summary = Summaries[Random.Shared.Next(Summaries.Length)]
	// 	})
	// 	.ToArray();
	// }

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
