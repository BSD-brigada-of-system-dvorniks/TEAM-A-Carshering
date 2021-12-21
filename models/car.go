package models

import "gorm.io/gorm"

type Car struct {
	gorm.Model
	Name         string `json:"name"`
	Capacity     string `json:"capacity"`
	Fuel         string `json:"fuel"`
	Power        string `json:"power"`
	Transmission string `json:"transmission"`
	Enginecap    string `json:"enginecap"`
	Fuelcap      string `json:"fuelcap"`
}
