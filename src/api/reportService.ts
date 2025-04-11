import axios from "./axios";

export const getFilterData = async () => {
  const response = await axios.get("filter-data");
  const data = response.data;

  return {
    grades: data.grades.map((g) => g.grade),
    group: data.group.map((g) => g.group),
    business_entity: data.business_entity.map((b) => b.business_entity),
    country: data.country.map((c) => c.country),
  };
};

export const getUsers = async ({ queryKey }:any) => {
  const [_key, filters, currentPage, searchTerm] = queryKey;
  const response = await axios.get("user-report", {
    params: {
       searchTerm: searchTerm || "",
      grade: filters.grade || "",
      group: filters.group || "",
      business_entity: filters.business_entity || "ACCESS ARM PENSIONS",
      country: filters.country || "",
      limit: 10,
      page: currentPage || 1,
    },
  });
  return response?.data || [];
};

export const getReport = async ({ userId }:{ userId :string}) => {
  const response = await axios.get(`/report/${userId}`);
  return response?.data || [];
};
