import Cities from "@/components/Austrailia/City/Cities";

export default async function Page({ params }) {
  const { slug } =await params;
  

  return (
   <Cities city={slug} />
  );
}
