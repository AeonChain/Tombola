using System.ComponentModel.DataAnnotations.Schema;

namespace solution_2.Models;

public class Bean
{
	[Column("BeanIndex")]
	public int Index { get; set; }
	[Column("_id")]
	public string Id { get; set; } = string.Empty;
	[Column("isBotd")]
	public bool IsBOTD { get; set; }
	[Column("cost")]
	public string Cost { get; set; } = string.Empty;
	[Column("image")]
	public string Image { get; set; } = string.Empty;
	[Column("colour")]
	public string Colour { get; set; } = string.Empty;
	[Column("name")]
	public string Name { get; set; } = string.Empty;
	[Column("description")]
	public string Description { get; set; } = string.Empty;
	[Column("country")]
	public string Country { get; set; } = string.Empty;
	[Column("lastInstanceOfBOTD")]
	public DateTime? LastInstanceOfBOTD { get; set; }

}