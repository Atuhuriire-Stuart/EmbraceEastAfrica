using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace EmbraceEastAfrica.Models
{
    public class EastAfricaContext : DbContext
    {
        public EastAfricaContext() : base("name=EastAfricaDB")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<EastAfricaContext, Migrations.Configuration>());
        }

        public DbSet<Country> Countries { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<ContactMessage> ContactMessages { get; set; }
        public DbSet<NewsletterSubscriber> NewsletterSubscribers { get; set; }
        public DbSet<GalleryImage> GalleryImages { get; set; }
        public DbSet<NewsArticle> NewsArticles { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            // Configure relationships
            modelBuilder.Entity<Country>()
                .HasMany(c => c.GalleryImages)
                .WithRequired(g => g.Country)
                .WillCascadeOnDelete(true);

            modelBuilder.Entity<Country>()
                .HasMany(c => c.NewsArticles)
                .WithRequired(n => n.Country)
                .WillCascadeOnDelete(true);
        }
    }
}