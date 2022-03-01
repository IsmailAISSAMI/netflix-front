import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import categoryService from "../../services/category.service";
import CreateButton from "../../components/UI/CreateButton/index";
import DeleteButton from "../../components/UI/DeleteButton/index";
import MonitoringTable from "../../components/UI/MonitoringTable/index";
import styles from "./MonitoringCategories.module.sass";

const Index = () => {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const tableHeader = [
    "Id",
    "Label", 
    "Actions"
  ];

  useEffect(() => {
    categoryService.getCategories().then((data) => {
        setCategories(data);
        console.log(`[V] categories:\n${data}`);
    });
  }, []);

  const handleDelete = (category) => {
    categoryService
      .deleteCategory(category)
      .then((data) => {
        console.log(data);
        router.reload("/monitoringCategories");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className={styles.monitoring_categories}>
      <div className={styles.monitoring_categories_buttons}>
        <CreateButton onClick={() => router.push("/createCategories")} />
      </div>
      <MonitoringTable header={tableHeader} data={categories}>
        <tbody>
          {categories.map((category, index) => {
            return (
              <tr key={`tr-key-${index}`}>
                <td>{category.id || "None"}</td>
                <td>{category.label || "None"}</td>
                <td>
                  <DeleteButton onClick={() => handleDelete(category)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </MonitoringTable>
    </div>
  );
};

export default Index;
