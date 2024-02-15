'use client';
import { useState } from "react";
import styles from "./components/Home/home.module.css";

import Header from "./components/Partials/Header";
import Footer from "./components/Partials/Footer";

import EventViewSelector, { type ViewOption } from "./components/Home/EventViewSelector";
import ConfirmedList from "./components/Home/ConfirmedList";
import EventGroup from "./components/Home/EventGroup";
import EventMessagingHeader from "./components/Home/EventMessagingHeader";

export default function Home() {
  const [viewOption, setViewOption] = useState<ViewOption>('confirmed');

  // O EventMessagingHeader estava no lugar errado. Ele deveria ficar entre o header padrão e o EventViewSelector

  return (
    <main className={styles.home}>
      <Header />
      <EventMessagingHeader />
      <EventViewSelector setSelected={setViewOption} selected={viewOption} />
      {viewOption === 'confirmed' ? <ConfirmedList /> : <EventGroup />}
      <Footer />
    </main>
  );
}
