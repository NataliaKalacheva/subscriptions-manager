import serializeSubscriptionsResponse from '@/store/utils/serializeSubscriptionsResponse'

describe('serializeSubscriptionsResponse.js', () => {
  it('check that response modified to object', () => {
    const arrayForTest = [
      { id: 1, name: 'Test' },
      { id: 2, name: 'Example' }
    ]
    const expected = {
      1: { id: 1, name: 'Test' },
      2: { id: 2, name: 'Example' }
    }
    expect(serializeSubscriptionsResponse(arrayForTest)).toEqual(expected)
  })

  it('check that empty array returns blank object', () => {
    const arrayForTest = []
    const expected = {}
    expect(serializeSubscriptionsResponse(arrayForTest)).toEqual(expected)
  })

  it('check that incorrect data returns blank object', () => {
    const arrayForTest = null;
    const expected = {}
    expect(serializeSubscriptionsResponse(arrayForTest)).toEqual(expected)
  })

})
