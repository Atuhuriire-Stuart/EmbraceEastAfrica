using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmbraceEastAfrica.Models
{
    public class Country
    {
        [Key]
        public int CountryId { get; set; }

        [Required]
        [StringLength(100)]
        [Index(IsUnique = true)]
        public string Name { get; set; }

        [Required]
        [Display(Name = "Flag Image")]
        public string FlagImagePath { get; set; }

        [Required]
        [DataType(DataType.MultilineText)]
        public string About { get; set; }

        [Required]
        [Display(Name = "National Anthem")]
        [DataType(DataType.MultilineText)]
        public string Anthem { get; set; }

        [Required]
        [Display(Name = "Head of State")]
        public string HeadOfState { get; set; }

        [Display(Name = "Head of State Photo")]
        public string HeadOfStateImagePath { get; set; }

        [Required]
        [Display(Name = "Key Ministries")]
        [DataType(DataType.MultilineText)]
        public string Ministries { get; set; } // JSON or pipe-separated

        [Required]
        [Display(Name = "Tourist Attractions")]
        [DataType(DataType.MultilineText)]
        public string Attractions { get; set; } // JSON or pipe-separated

        [Display(Name = "Cultural Highlights")]
        [DataType(DataType.MultilineText)]
        public string CulturalHighlights { get; set; }

        [Display(Name = "Economic Overview")]
        [DataType(DataType.MultilineText)]
        public string EconomicOverview { get; set; }

        [DataType(DataType.Date)]
        [Display(Name = "Last Updated")]
        public DateTime LastUpdated { get; set; } = DateTime.Now;

        // Navigation properties
        public virtual ICollection<GalleryImage> GalleryImages { get; set; }
        public virtual ICollection<NewsArticle> NewsArticles { get; set; }
    }
}