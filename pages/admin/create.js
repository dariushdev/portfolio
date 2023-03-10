import AdminForm from "../../components/Admin/Form";

export default function CreatePage() {
  return <AdminForm method="POST" />;
}

CreatePage.auth = true;
