import { IAddress } from '@/entities/models/address.interface'
import { IAddressRepository } from '@/repositories/address.repository.interface'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

export class CreateAddressUseCase {
  constructor(private addressRepository: IAddressRepository) {}

  async execute(address: IAddress): Promise<IAddress | undefined> {
    if (!address.person) throw new ResourceNotFoundError()
    return this.addressRepository.create(address)
  }
}
