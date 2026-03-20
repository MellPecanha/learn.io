import { expect, describe, it, beforeEach } from 'vitest'
import { CreateAddressUseCase } from '../create-address'
import { InMemoryAddressRepository } from '@/repositories/in-memory/in-memory-address-repository'

describe('Create Address Use Case', () => {
  let addressRepository: InMemoryAddressRepository
  let sut: CreateAddressUseCase

  beforeEach(() => {
    addressRepository = new InMemoryAddressRepository()
    sut = new CreateAddressUseCase(addressRepository)
  })

  it('deve ser possível cadastrar um novo endereço', async () => {
    const address = await sut.execute({
      street: 'Rua de Teste',
      city: 'Cidade de Teste',
      state: 'SP',
      zip_code: '12345-678',
      person: 1,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any)

    expect(address?.id).toEqual(expect.any(Number))
    expect(address?.street).toBe('Rua de Teste')
    expect(addressRepository.items).toHaveLength(1)
  })

  it('não deve ser possível criar endereço sem uma pessoa vinculada', async () => {
    await expect(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      () => sut.execute({ street: 'Rua' } as any), // Sem person_id
    ).rejects.toThrow()
  })
})
