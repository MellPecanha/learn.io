import { IAddress } from '@/entities/models/address.interface'
import { IPerson } from '@/entities/models/person.interface'
import { IAddressRepository } from '../address.repository.interface'
import { Repository } from 'typeorm'
import { appDataSource } from '@/lib/typeorm/typeorm'
import { Address } from '@/entities/address'

export class AddressRepository implements IAddressRepository {
  private repository: Repository<Address>

  constructor() {
    this.repository = appDataSource.getRepository(Address)
  }

  async findAddressByPersonId(
    personId: number,
    page: number,
    limit: number,
  ): Promise<(IAddress & IPerson)[]> {
    const address = await this.repository.find({
      relations: ['person'],
      where: { person: { id: personId } },
      skip: (page - 1) * limit,
      take: limit,
    })

    return (
      address as unknown as (Omit<IAddress, 'person'> & { person: IPerson })[]
    ).map((addr) => {
      const { person, ...addressData } = addr

      return {
        ...addressData,
        ...person,
      }
    })
  }

  async create(address: IAddress): Promise<IAddress | undefined> {
    return this.repository.save(address as Address)
  }
}
