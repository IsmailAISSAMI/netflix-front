import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import authService from "../../services/auth.service";
import CreateButton from "../../components/UI/CreateButton/index";
import DeleteButton from "../../components/UI/DeleteButton/index";
import MonitoringTable from "../../components/UI/MonitoringTable/index";
import styles from "./MonitoringUsers.module.sass";

const Index = () => {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const tableHeader = [
    "First Name",
    "Last Name",
    "Email",
    "Subscribed Date",
    "Is Admin",
    "Is Standard",
    "Is Premium",
    "Actions",
  ];

  useEffect(() => {
    authService.getUsers().then((data) => {
      setUsers(data);
      console.log(data);
    });
  }, []);

  function handleDelete(user) {
    authService
      .deleteUser(user)
      .then((data) => {
        console.log(data);
        router.reload("/monitoringUsers");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className={styles.monitoring_users}>
      <div className={styles.monitoring_users_buttons}>
        <CreateButton onClick={() => router.push("/createUsers")} />
      </div>
      <MonitoringTable header={tableHeader} data={users}>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={`tr-key-${index}`}>
                <td>{user.firstName || "None"}</td>
                <td>{user.lastName || "None"}</td>
                <td>{user.email || "None"}</td>
                <td>{user.subscribeDate || "None"}</td>
                <td className={user.isAdmin ? styles.is_true : styles.is_false}>
                  {user.isAdmin ? "True" : "False"}
                </td>
                <td
                  className={user.isStandard ? styles.is_true : styles.is_false}
                >
                  {user.isStandard ? "True" : "False"}
                </td>
                <td
                  className={user.isPremium ? styles.is_true : styles.is_false}
                >
                  {user.isPremium ? "True" : "False"}
                </td>
                <td>
                  <DeleteButton onClick={() => handleDelete(user)} />
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
