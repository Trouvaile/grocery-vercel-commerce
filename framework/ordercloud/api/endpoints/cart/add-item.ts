import type { CartEndpoint } from '.'

const addItem: CartEndpoint['handlers']['addItem'] = async ({
  res,
  body: { cartId, item },
}) => {
  if (!item) {
    return res.status(400).json({
      data: null,
      errors: [{ message: 'Missing item' }],
    })
  }

  console.log({ cartId })

  // res.setHeader(
  //   'Set-Cookie',
  //   getCartCookie(config.cartCookie, data.id, config.cartCookieMaxAge)
  // )

  res.status(200).json({ data: null, errors: [] })
}

export default addItem
