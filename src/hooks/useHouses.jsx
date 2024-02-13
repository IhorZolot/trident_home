import React, { useContext } from 'react'

import { HousesContext } from '@/app/context/HousesProvider'

export const useHouses = () => useContext(HousesContext)
