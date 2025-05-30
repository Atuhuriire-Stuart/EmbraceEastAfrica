using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmbraceEastAfrica.Models
{
    public class ContactMessage
    {
        [Key]
        public int MessageId { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [StringLength(500)]
        [DataType(DataType.MultilineText)]
        public string Message { get; set; }

        [DataType(DataType.DateTime)]
        [Display(Name = "Date Sent")]
        public DateTime SentDate { get; set; } = DateTime.Now;

        [Display(Name = "Is Read")]
        public bool IsRead { get; set; } = false;

        [Display(Name = "Response Notes")]
        [DataType(DataType.MultilineText)]
        public string ResponseNotes { get; set; }

        // Foreign Key
        public int? UserId { get; set; }

        // Navigation property
        [ForeignKey("UserId")]
        public virtual User RespondedBy { get; set; }
    }
}