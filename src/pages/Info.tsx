import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Info = () => {
  const { mssv } = useParams();
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (mssv) {
      getInfoSv();
    }
  }, [mssv]);

  const getInfoSv = async () => {
    try {
      setLoading(true);
      const results = await axios.get(
        `https://sguserver-production.up.railway.app/v1?mssv=${mssv}`
      );

      setData(results.data);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      {loading ? (
        "Loading ..."
      ) : (
        <>
          {" "}
          <h3>{data?.hoc_ki}</h3>
          <h3>{data?.thong_tin.ho_ten_ngay_sinh}</h3>
          <h3>{data?.thong_tin.lop_nganh_khoa}</h3>
          <h3>{data?.thong_tin.mssv}</h3>
          <Link to={"/"}>
            <button>Back</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Info;
