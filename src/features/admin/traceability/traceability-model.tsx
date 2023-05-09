import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function useTraceability() {
  const navigate = useNavigate();
  const { state } = useLocation();
  //data Traceability
  const [dataTraceability, setDataTraceability] = useState([]);
  //modalExport
  const [openModalExport, setOpenModalExport] = useState(false);
  //click detail data
  const onOpenDetail = (type): void => {
    navigate("detail", {
      state: {
        type: type,
      },
    });
  };
  //click back/kembali
  const onOpenBack = (): void => {
    navigate("../");
  };
  useEffect(() => {
    setDataTraceability([
      {
        id: 1,
        tipeMaintenance: "Checklist",
        departemen: "Profile",
        section: "Produksi 01",
        line: "01",
        noMesin: "SR-12345",
        pelaksana: "Bramantra Putra",
      },
      {
        id: 2,
        tipeMaintenance: "Preventive",
        departemen: "Profile",
        section: "Produksi 02",
        line: "02",
        noMesin: "RS-12345",
        pelaksana: "Cendani Arum",
      },
    ]);
  }, []);

  return {
    state,
    dataTraceability,
    openModalExport,
    onOpenDetail,
    onOpenBack,
    setOpenModalExport
  };
}
