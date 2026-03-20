import { IAddress } from '@/entities/models/address.interface'
import { IPerson } from '@/entities/models/person.interface'
import { IAddressRepository } from '../address.repository.interface'

export class InMemoryAddressRepository implements IAddressRepository {
  public items: IAddress[] = []

  async create(address: IAddress): Promise<IAddress> {
    const newAddress: IAddress = {
      id: this.items.length + 1,
      street: address.street,
      city: address.city,
      state: address.state,
      zip_code: address.zip_code,
      person: address.person,
    }

    this.items.push(newAddress)
    return newAddress
  }

  async findAddressByPersonId(
    personId: number,
    page: number,
    limit: number,
  ): Promise<(IAddress & IPerson)[]> {
    const addresses = this.items.filter((item) => {
      if (typeof item.person === 'number') {
        return item.person === personId
      }
      return item.person?.id === personId
    })

    return addresses.slice((page - 1) * limit, page * limit).map((addr) => ({
      ...addr,
      id: addr.id!,
      name: 'Fake Person Name',
      email: 'fake@email.com',
      cpf: '123.456.789-00',
      birth: new Date(),
    })) as (IAddress & IPerson)[]
  }
}
