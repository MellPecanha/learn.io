import { AddressRepository } from '@/repositories/typeorm/address.repository'
import { CreateAddressUseCase } from '../create-address'

export function makeCreateAddressUseCase() {
  const addressRepository = new AddressRepository()
  const createAddressUseCase = new CreateAddressUseCase(addressRepository)
  return createAddressUseCase
}
