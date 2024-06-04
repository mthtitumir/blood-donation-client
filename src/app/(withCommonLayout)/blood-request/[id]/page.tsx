import BloodRequestForm from "@/components/ui/boodRequestPage/BloodRequestForm/BloodRequestForm";

const BloodRequestToDonorPage = ({ params }: { params: { id: string } }) => {
  return <BloodRequestForm id={params?.id} />;
};

export default BloodRequestToDonorPage;
