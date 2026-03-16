import { AddressRepository } from '@/repositories/typeorm/address.repository'
import { FindAddressByPersonUseCase } from '../find-address-by-person'

export function makeFindAddressByPersonUseCase() {
  const addressRepository = new AddressRepository()
  const findAddressByPersonUseCase = new FindAddressByPersonUseCase(
    addressRepository,
  )

  return findAddressByPersonUseCase
}
