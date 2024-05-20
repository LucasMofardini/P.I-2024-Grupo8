using Microsoft.EntityFrameworkCore;
using Project.Domain;

namespace Project.Infrastructure.Data;
public class Context : DbContext
{
    public Context(DbContextOptions<Context> opts) : base(opts)
    {
    }
    
    public DbSet<Domain.Project> Project { get; set; }
    
    public DbSet<HistoryRegister> HistoryRegister { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Domain.Project>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Id).ValueGeneratedOnAdd(); // ID gerado automaticamente
        });
    }
}