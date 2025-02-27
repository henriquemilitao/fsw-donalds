export default function Home() {
  return <h1>Home</h1>
}

// 204acbc (HEAD -> aula-05, origin/aula-05) feat: ensure all orders and back buttons work as expected
// 157dd6a feat: ensure cache is revalidated when creating an order
// 36cd056 chore: sort file imports
// 4a7fcff chore: add postinstall with prisma generate script
// 47b5cf2 feat: ensure cart summary is shown on restaurant page
// 5895ccc fix: ensure user is redirected with cpf after order creation
// 9fa5a65 feat: add orders page
// b879153 feat: ensure order can be created
// a419e45 feat: add initial finish order dialog component
// 5f7f070 feat: ensure cart total is shown
// 4c2008a feat: ensure cart product can be removed
// 99b66fc feat: ensure cart product quantity can be increased
// c0ddd4b feat: ensure cart product quantity can be decreased
// 2c38788 feat: add initial cart product item component (without functionality)

//stripe listen --forward-to localhost:3000/api/order/payment-success
//npx prisma studio