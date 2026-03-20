import { expect, describe, it, beforeEach } from 'vitest'
import { FindAddressByPersonUseCase } from '../find-address-by-person'
import { InMemoryAddressRepository } from '@/repositories/in-memory/in-memory-address-repository'

describe('Find Address By Person Use Case', () => {
  let addressRepository: InMemoryAddressRepository
  let sut: FindAddressByPersonUseCase

  beforeEach(async () => {
    addressRepository = new InMemoryAddressRepository()
    sut = new FindAddressByPersonUseCase(addressRepository)

    await addressRepository.create({
      street: 'Rua A',
      city: 'Cidade A',
      state: 'SP',
      zip_code: '11111-111',
      person: 1,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any)

    await addressRepository.create({
      street: 'Rua B',
      city: 'Cidade B',
      state: 'RJ',
      zip_code: '22222-222',
      person: 1,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any)

    // Endereço de outra pessoa (ID 2)
    await addressRepository.create({
      street: 'Rua C',
      city: 'Cidade C',
      state: 'MG',
      zip_code: '33333-333',
      person: 2,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any)
  })

  it('deve ser possível listar endereços de uma pessoa específica', async () => {
    const addresses = await sut.execute(1, 1, 10)

    expect(addresses).toHaveLength(2)
    expect(addresses[0].street).toBe('Rua A')
    expect(addresses[1].street).toBe('Rua B')
  })

  it('deve retornar uma lista vazia se a pessoa não tiver endereços', async () => {
    const addresses = await sut.execute(999, 1, 10)
    expect(addresses).toHaveLength(0)
  })

  it('deve ser possível paginar a busca de endereços', async () => {
    const addresses = await sut.execute(1, 2, 1)

    expect(addresses).toHaveLength(1)
    expect(addresses[0].street).toBe('Rua B')
  })
})
