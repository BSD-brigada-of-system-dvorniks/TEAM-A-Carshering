package postgres

import (
	"github.com/Valeriia-bizonchik/CarRental/models"
)

func (c CarRentalStorage) GetAllCars() ([]*models.Car, error) {
	cars := []*models.Car{}
	err := c.Find(&cars).Error

	if err != nil {
		return nil, err
	}
	return cars, nil
}

func (c CarRentalStorage) DeleteCar(id string) error {
	var car models.Car
	if err := c.Where("id = ? ", id).Delete(&car).Error; err != nil {
		return err
	}
	return nil

}

func (c CarRentalStorage) UpdateCar(car *models.Car) (*models.Car, error) {
	if err := c.Save(&car).Error; err != nil {
		return nil, err
	}
	return car, nil

}

func (c CarRentalStorage) GetCar(id string) (*models.Car, error) {
	car := models.Car{}

	err := c.First(&car, id).Error

	if err != nil {
		return nil, err
	}
	return &car, nil

}
