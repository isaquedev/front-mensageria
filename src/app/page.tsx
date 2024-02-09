'use client';
import { useState } from "react";
import styles from "./page.module.css";

import Header from "./components/header";
import EventViewSelector from "./components/EventViewSelector";
import ConfirmedList from "./components/confirmedList";
import EventGroup from "./components/eventGroup";
import Footer from "./components/footer";

export default function Home() {
  const [viewOption, setViewOption] = useState(true);

  return (
    <main className={styles.home}>
      <Header />
      <EventViewSelector setSelected={setViewOption} />
      {viewOption ? <ConfirmedList /> : <EventGroup />}
      <Footer />
    </main>
  );
}
