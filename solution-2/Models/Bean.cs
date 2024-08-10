using System.ComponentModel.DataAnnotations.Schema;

namespace solution_2.Models;

public class Bean
{
	[Column("BeanIndex")]
	public int Index { get; set; }
	[Column("_id")]
	public required string Id { get; set; }
	[Column("isBotd")]
	public bool IsBOTD { get; set; }
	[Column("cost")]
	public required string Cost { get; set; }
	[Column("image")]
	public required string Image { get; set; }
	[Column("colour")]
	public required string Colour { get; set; }
	[Column("name")]
	public required string Name { get; set; }
	[Column("description")]
	public required string Description { get; set; }
	[Column("country")]
	public required string Country { get; set; }
}