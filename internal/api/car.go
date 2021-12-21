package api

import (
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/Valeriia-bizonchik/CarRental/models"
	"github.com/gin-gonic/gin"
)

func (a *API) Echo(c *gin.Context) {
	data, err := ioutil.ReadAll(c.Request.Body)
	if err != nil {
		err = c.AbortWithError(400, err)
		a.log.Error(err)
		return
	}
	_, err = c.Writer.Write(data)
	if err != nil {
		a.log.Error(err)
		c.AbortWithStatus(500)
	}
	c.Status(200)

}

func (a *API) GetAllCars(c *gin.Context) {
	// cars, err := a.storage.GetAllCars()
	// if err != nil {
	// 	a.log.Error(err)
	// 	c.AbortWithError(500, err.New("internal server error"))
	// }

	cars := []*models.Car{
		{
			Name:         "Renalult Logan",
			Capacity:     "4",
			Fuel:         "gasoline",
			Power:        "73",
			Transmission: "Mechanic front",
			Enginecap:    "1200",
			Fuelcap:      "50",
		},
		{
			Name:         "Renalult Logan2",
			Capacity:     "5",
			Fuel:         "diesel",
			Power:        "74",
			Transmission: "Mechanic back",
			Enginecap:    "1500",
			Fuelcap:      "50",
		},
		{
			Name:         "Renalult Logan3",
			Capacity:     "2",
			Fuel:         "gasoline",
			Power:        "65",
			Transmission: "Mechanic front",
			Enginecap:    "1500",
			Fuelcap:      "60",
		},
	}

	c.JSON(200, cars)
	return
}

func (a *API) DeleteCar(c *gin.Context) {
	id := c.Params.ByName("id")
	car, err := a.storage.GetCar(id)

	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, err.Error())
		return
	}

	println(car)

	err = a.storage.DeleteCar(id)
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, "Car deleted successfully")

}

func (a *API) UpdateCar(c *gin.Context) {

	// Check if car exist in DB
	id := c.Params.ByName("id")
	car, err := a.storage.GetCar(id)
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, err.Error())
		return
	}
	println(car)

	// Updating car
	updatedCar := models.Car{}
	err = c.BindJSON(&updatedCar)
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, err.Error())
		return
	}

	car, err = a.storage.UpdateCar(&updatedCar)

	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, err.Error())
		return
	}
	c.JSON(200, car)
	return
}

func (a *API) CreateCar(c *gin.Context) {

	car := models.Car{}
	err := c.BindJSON(&car)
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, err.Error())
		return
	}

	if err := a.storage.DB.Create(&car).Error; err != nil {
		c.JSON(http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, car)

}

func (a *API) GetCar(c *gin.Context) {

	id := c.Params.ByName("id")
	car, err := a.storage.GetCar(id)
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, car)

}
