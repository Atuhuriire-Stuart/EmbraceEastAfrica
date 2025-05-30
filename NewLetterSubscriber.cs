using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmbraceEastAfrica.Models
{
    public class NewsletterSubscriber
    {
        [Key]
        public int SubscriberId { get; set; }

        [Required]
        [EmailAddress]
        [StringLength(100)]
        [Index(IsUnique = true)]
        public string Email { get; set; }

        [DataType(DataType.DateTime)]
        [Display(Name = "Subscription Date")]
        public DateTime SubscriptionDate { get; set; } = DateTime.Now;

        [Display(Name = "Is Active")]
        public bool IsActive { get; set; } = true;

        [Display(Name = "Subscription Token")]
        public string SubscriptionToken { get; set; } = Guid.NewGuid().ToString();

        [Display(Name = "Unsubscribe Date")]
        public DateTime? UnsubscribeDate { get; set; }
    }
}