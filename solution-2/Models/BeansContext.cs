using Microsoft.EntityFrameworkCore;

namespace solution_2.Models;

public class BeansContext : DbContext
{
	protected readonly IConfiguration Configuration;


	public BeansContext(DbContextOptions<BeansContext> options, IConfiguration configuration)
		: base(options)
	{
		Configuration = configuration;
	}

	protected override void OnConfiguring(DbContextOptionsBuilder options)
	{
		// connect to sqlite database
		options.UseSqlite(Configuration.GetConnectionString("BeansDatabase"));

	}
	protected override void OnModelCreating(ModelBuilder modelBuilder)
	{
		modelBuilder.Entity<Bean>()
				.HasKey(b => b._id)
				.HasName("PrimaryKey_BlogId");
	}


	public DbSet<Bean> Beans { get; set; } = null!;
}