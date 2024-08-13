using Microsoft.AspNetCore.Mvc;
using solution_2.Models;

namespace solution_2.Controllers;

[ApiController]
[Route("[controller]/[action]")]
public class OrderController : ControllerBase
{
	private readonly ILogger<BeanController> _logger;

	public OrderController(ILogger<BeanController> logger)
	{
		_logger = logger;
	}

	[HttpPost]
	public IActionResult Add([FromBody] Order order)
	{
		var dummy = 0;
		return new JsonResult(new { dummy });
	}
}
