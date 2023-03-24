﻿using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.ComponentModel.DataAnnotations;
using System.Reflection.Metadata;

namespace React.Entities
{
    public class Vehicle
    {
        [BsonId]
        public ObjectId _Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required] 
        public string Image { get;set; }
        [Required]
        public string Capacity { get; set; }
        [Required]
        public string RGnumber { get; set; }
        [Required]
        public string RentPerHour { get; set; }
        [Required]
        public string FuelType { get; set; }
    }
}
