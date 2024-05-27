import UserProfile from "@/components/ui/donorsPage/UserProfile/UserProfile";
import { createRowData } from "@/utils/CreateRowData";
import { Container } from "@mui/material";

type TParamProps = { params: { id: string } };

const DonorDetailsPage = async ({ params }: TParamProps) => {
  console.log(params.id);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/${params?.id}`
  );
  const { data } = await res.json();

  const rows = [
    createRowData("Name", data?.name),
    createRowData("Email", data?.email),
    createRowData("Blood Group", data?.bloodType),
    createRowData("Age", data?.age),
    createRowData("Location", data?.location),
    createRowData("Last Donation", data?.lastDonationDate),
  ];
  return (
    <Container>
      <UserProfile rows={rows} data={data} />
    </Container>
  );
};

export default DonorDetailsPage;
