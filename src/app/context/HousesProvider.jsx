'use client'
import { filteredTypes } from '@/modules/filter/filteredTypes'
import { houseData } from '@/shared/Data/home-image-data'
import React, { createContext, useState } from 'react'

export const HousesContext = createContext()

export const HousesProvider = ({ children }) => {
	const houses = houseData
	const [filteredData, setFilteredData] = useState(null)
	const [page, setPage] = useState(1)

	const getFilterHouses = () => {
		if (!filteredData) return houses
		const selectedTypes = Object.keys(filteredData).filter(
			key =>
				filteredData[key] &&
				key !== filteredTypes.areaFrom &&
				key !== filteredTypes.areaTo &&
				key !== filteredTypes.roomsFrom &&
				key !== filteredTypes.roomsTo &&
				key !== filteredTypes.garage &&
				key !== filteredTypes.bathrooms
		)
		console.log(selectedTypes)
		return houses
			.filter(item => {
				if (!selectedTypes.length) return true // [] {} item
				return selectedTypes.includes(item.type)
			})
			.filter(item => {
				const areaFrom = filteredData['area-from'] ? +filteredData['area-from'] : 0
				const areaTo = filteredData['area-to'] ? +filteredData['area-to'] : 9999999
				return item.usableArea >= areaFrom && item.usableArea <= areaTo
			})
			.filter(item => {
				const roomsFrom = filteredData['rooms-from'] ? +filteredData['rooms-from'] : 0
				const roomsTo = filteredData['rooms-to'] ? +filteredData['rooms-to'] : 9999999
				return item.rooms >= roomsFrom && item.rooms <= roomsTo
			})
			.filter(item => {
				const bathrooms = filteredData['bathrooms']
				if (!bathrooms) return true
				return item.bathrooms === +bathrooms
			})
			.filter(item => {
				const garage = filteredData['garages']
				if (garage === null) return true
				if (item.garage && garage === '1') return true
				if (!item.garage && garage === '0') return true
			})
	}
	const contextValue = {
		houses: getFilterHouses(),
		filteredData,
		setFilteredData,
		page,
		setPage,
	}
	return <HousesContext.Provider value={contextValue}>{children}</HousesContext.Provider>
}
