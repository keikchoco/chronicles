'use client'
import React, {useState } from "react";
import {
  FiBarChart,
  FiDollarSign,
  FiHome,
  FiMonitor,
  FiShoppingCart,
  FiTag,
  FiUsers
} from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";
import Option from "./option";
import NavFooter from "./navfooter";

const AdminSidebar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2"
      style={{
        width: open ? "225px" : "fit-content",
      }}
    >
      <TitleSection open={open} />

      <div className="space-y-1">
        <Option
          Icon={FiHome}
          title="Dashboard"
          selected={selected}
          setSelected={setSelected}
          open={open}
          href="/admin"
        />
        <Option
          Icon={FiDollarSign}
          title="Edit Officers"
          selected={selected}
          setSelected={setSelected}
          open={open}
          href="/edit-officers"
        />
        <Option
          Icon={FiMonitor}
          title="View Site"
          selected={selected}
          setSelected={setSelected}
          open={open}
          href="/admin"
        />
        <Option
          Icon={FiShoppingCart}
          title="Products"
          selected={selected}
          setSelected={setSelected}
          open={open}
          href="/admin"
        />
        <Option
          Icon={FiTag}
          title="Tags"
          selected={selected}
          setSelected={setSelected}
          open={open}
          href="/admin"
        />
        <Option
          Icon={FiBarChart}
          title="Analytics"
          selected={selected}
          setSelected={setSelected}
          open={open}
          href="/admin"
        />
        <Option
          Icon={FiUsers}
          title="Members"
          selected={selected}
          setSelected={setSelected}
          open={open}
          href="/admin"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-slate-300">
        <NavFooter open={open} setOpen={setOpen}></NavFooter>
      </div>
    </motion.nav>
  );
};


const TitleSection = ({ open }: { open: boolean }) => {
  return (
    <div className="mb-3 border-b border-slate-300 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
        <div className="flex items-center gap-2">
          <Logo />
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
            >
              <span className="block text-xs font-semibold">Tech</span>
              <span className="block text-xs text-slate-500">Administrator</span>
            </motion.div>
          )}
        </div>
        {/* {open && <FiChevronDown className="mr-2" />} */}
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <motion.div
      layout
      className="grid size-10 shrink-0 place-content-center rounded-md bg-neutral-600"
    >
      <Image
        src="/images/CICSSG-White.png"
        width={28}
        height={28}
        alt="Picture of the author"

      />
    </motion.div>
  );
};


export default AdminSidebar