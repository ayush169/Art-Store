import getBillboard from "@/actions/get-billboard";
import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import BillboardCarousel from "@/components/ui/billboardCarousel";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  //specific id for football billboard
  const billboard = await getBillboard("b8dfc89c-8dac-41dc-847c-e5f79d437b6e");
  const products = await getProducts({ isFeatured: true });
  const billboards = await getBillboards();

  return (
    <Container>
      <div className="space-y-10 pb-10">
        {/* <Billboard data={billboard} /> */}
        <BillboardCarousel data={billboards} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
