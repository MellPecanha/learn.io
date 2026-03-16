import { IAddressRepository } from '@/repositories/address.repository.interface'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

export class FindAddressByPersonUseCase {
  constructor(private addressRepository: IAddressRepository) {}

  async execute(person_id: number, page: number, limit: number) {
    const addresses = await this.addressRepository.findAddressByPersonId(
      person_id,
      page,
      limit,
    )

    if (!addresses) throw new ResourceNotFoundError()

    return addresses
  }
}
