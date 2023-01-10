import React from "react";
import {
  FaRegFileAlt,
  FaStream,
  FaStar,
  FaGopuram,
  FaPodcast,
  FaFileSignature,
  FaBell,
  FaShoppingBag,
  FaWallet,
  FaHome,
  FaUserEdit,
  FaAdversal,
  FaStore,
  FaUsers,
  FaCircle,
  FaCog,
  FaQuestionCircle,
  FaSlidersH,
  FaUser,
  FaShoppingCart,
  FaGift,
  FaProductHunt,
} from "react-icons/fa";
import * as Icon from "react-feather";
import { BsImage } from "react-icons/bs";
import { MdOutlineFolderSpecial } from "react-icons/md";
import { GiWantedReward } from "react-icons/gi";
import { CiDiscount1 } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillBell } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi";

// eslint-disable-next-line no-sparse-arrays
const navigationConfig = [
  {
    id: "dashboard",
    title: "DASHBOARD",
    type: "item",
    icon: <FaHome size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/",
  },
  {
    type: "groupHeader",
    groupTitle: "ORDER MANAGEMENT",
  },
  {
    id: "order",
    title: "Orders",
    type: "collapse",
    icon: <FaShoppingCart size={15} />,
    children: [
      {
        id: "all",
        title: "All  (50)",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/all",
      },
      {
        id: "pending ",
        title: "Pending  (10)",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/pending",
      },
      {
        id: "confirmed",
        title: "Confirmed (12)",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/confirmed",
      },
      {
        id: "inprocess ",
        title: "In Process (17)",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/inprocess",
      },
      {
        id: "outfordelivery",
        title: "Out for delivery (09)",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/outfordelivery",
      },
      {
        id: "delivery",
        title: "Delivered (20)",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/delivered",
      },
      {
        id: "return",
        title: "Returned (07)",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/returned",
      },
      {
        id: "failedtodeliver",
        title: "Failed to Deliver",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/failedtodeliver",
      },
      // {
      //   id: "canceled",
      //   title: "Canceled (00)",
      //   type: "item",
      //   icon: <FaCircle size={8} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/freshlist/order/canceled",
      // },
    ],
  },
  {
    id: "refund",
    title: "Refund Requests",
    type: "collapse",
    icon: <FaRegFileAlt size={15} />,
    children: [
      {
        id: "pending",
        title: "Pending",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/refundrequest/pendingRequest",
      },
      {
        id: "approv",
        title: "Approved",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/refundrequest/approvedRequest",
      },

      {
        id: "comp",
        title: "Completed",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/refundrequest/completedRequest",
      },
      {
        id: "reject",
        title: "Rejected",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/refundrequest/rejectedRequest",
      },
    ],
  },
  {
    type: "groupHeader",
    groupTitle: "Report MANAGEMENT",
  },
  {
    id: "sales",
    title: "Sales",
    type: "collapse",
    icon: <FaWallet size={15} />,
    children: [
      {
        id: "total_sale",
        title: "Total Sale",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/sales/total_sales",
      },
      {
        id: "hub_sale",
        title: "Hub Sale",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/sales/hub_sale",
      },
    ],
  },

  {
    type: "groupHeader",
    groupTitle: "USER MANAGEMENT",
  },
  {
    id: "customer",
    title: "Customers  ",
    type: "collapse",
    icon: <FaWallet size={15} />,
    children: [
      {
        id: "customergroup",
        title: "Customer Group",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/customer/customergroup",
      },
      {
        id: "list",
        title: "Customer List",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/customer/customerList",
      },
      // {
      //   id: "wallet",
      //   title: "Wallet",
      //   type: "item",
      //   icon: <FaCircle size={8} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/freshlist/customer/wallet",
      // },
    ],
  },
  {
    id: "wallet",
    title: "Wallet",
    type: "collapse",
    icon: <FaCircle size={8} />,
    children: [
      {
        id: "credit",
        title: "Credit/Debit",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/wallet/walletType",
      },
    ],
  },
  {
    id: "vendor",
    title: "Vendors",
    type: "collapse",
    icon: <FaUsers size={15} />,
    children: [
      // {
      //   id: "vendor",
      //   title: "Add Vendors  ",
      //   type: "item",
      //   icon: <FaCircle size={8} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/freshlist/vendor/addVendor",
      // },
      {
        id: "vendor_list",
        title: "Vendors List",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/vendor/vendorList",
      },
      {
        id: "withdraw",
        title: "Withdraws",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/vendor/withDraws",
      },
    ],
  },
  {
    id: "subscriptions",
    title: "Subscriptions",
    type: "item",
    icon: <FaUser size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/subscriber/subscriberList",
  },
  {
    id: "driver",
    title: "Driver ",
    type: "collapse",
    icon: <FaUser size={15} />,
    children: [
      // {
      //   id: "addriver",
      //   title: "Add Driver",
      //   type: "item",
      //   icon: <FaCircle size={8} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/freshlist/driver/addDriver",
      // },
      {
        id: "driverList",
        title: "Driver List",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/driver/driverList",
      },
    ],
  },
  {
    id: "employee",
    title: "Employee",
    type: "collapse",
    icon: <FaUser size={15} />,
    children: [
      {
        id: "setup",
        title: "Employee Role Setup",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/employee/customsetuprole",
      },
      {
        id: "employees",
        title: "Employees",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/employee/employeeslist",
      },
    ],
  },
  {
    type: "groupHeader",
    groupTitle: "Hub MANAGEMENT",
  },
  {
    id: "hub",
    title: "Hub",
    type: "collapse",
    icon: <FaShoppingCart size={15} />,
    children: [
      // {
      //   id: "addhub",
      //   title: "AddHub",
      //   type: "item",
      //   icon: <FaCircle size={8} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/freshlist/hubs/addhub",
      // },
      {
        id: "hub_list",
        title: "HubList",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/hubs/hub_list",
      },
    ],
  },

  {
    type: "groupHeader",
    groupTitle: "PROMOTION MANAGEMENT",
  },
  {
    id: "Banner",
    title: "Banner",
    type: "item",
    icon: <BsImage size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/banner/BannerList",
  },
  {
    id: "special",
    title: "Special",
    type: "item",
    icon: <MdOutlineFolderSpecial size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/special/SpecialList",
  },
  {
    id: "discount",
    title: "Discount",
    type: "item",
    icon: <CiDiscount1 size={18} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/discount/DiscountList",
  },
  {
    id: "reward_point",
    title: "Reward Point",
    type: "item",
    icon: <GiWantedReward size={18} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/points/points",
  },

  {
    id: "offer&deal",
    title: "Offers & Deals",
    type: "collapse",
    icon: <FaUsers size={15} />,
    children: [
      {
        id: "couponcode",
        title: "Coupon Code",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/coupon/couponList",
      },
      {
        id: "flashSale",
        title: "Referal Code",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/flashSale/flashSale",
      },
      {
        id: "dealOfDay",
        title: "Hub Delivery",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/dealOfDay/dealOfDay",
      },
      {
        id: "featuredeal",
        title: " Pin Code",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/featuredeal/featuredeal",
      },
      {
        id: "notification",
        title: "Delivery Cities",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/notif/notification",
      },
    ],
  },
  {
    type: "groupHeader",
    groupTitle: "PRODUCT MANAGEMENT",
  },
  {
    id: "categorys",
    title: "Category Setup",
    type: "collapse",
    icon: <FaStream size={15} />,
    children: [
      {
        id: "category",
        title: "Category",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/category/categoryList",
      },
      {
        id: "subcategory",
        title: "Subcategory",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/subcategory/subCategoryList",
      },
    ],
  },

  // ---------------
  // {
  //   type: "groupHeader",
  //   groupTitle: "STOCK MANAGEMENT",
  // },
  // {
  //   id: "inhouseproduct",
  //   title: "In house Product",
  //   type: "collapse",
  //   icon: <FaStore size={15} />,
  //   children: [
  //     {
  //       id: "product",
  //       title: "Products",
  //       type: "item",
  //       icon: <FaCircle size={8} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/freshlist/house/HouseProductList",
  //     },
  //   ]
  // },

  // -------------
  {
    id: "product_attribute",
    title: "Product Attribute",
    type: "collapse",
    icon: <FaProductHunt size={15} />,
    children: [
      {
        id: "productlist",
        title: "ProductList",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/house/houseProductList",
      },
      {
        id: "bundlelist",
        title: "Bundle",
        type: "item",
        icon: <FaGopuram size={15} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/bundle/BundleList",
      },
    ],
  },
  {
    id: "brand",
    title: "Brands",
    type: "collapse",
    icon: <FaStar size={15} />,
    children: [
      // {
      //   id: "addbrand",
      //   title: "Add Brand",
      //   type: "item",
      //   icon: <FaCircle size={8} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/freshlist/brand/AddBrand",
      // },
      {
        id: "brandlist",
        title: "Brand List",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/brand/BrandList",
      },
    ],
  },

  {
    id: "batch",
    title: "Batch",
    type: "collapse",
    icon: <FaStar size={15} />,
    children: [
      // {
      //   id: "addbatch",
      //   title: "Add Batch",
      //   type: "item",
      //   icon: <FaCircle size={8} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/freshlist/batch/addbatch",
      // },
      {
        id: "assigntobatch",
        title: "Assign To Batch",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/batch/assigntobatch",
      },
    ],
  },
  {
    type: "groupHeader",
    groupTitle: "ZONE MANAGEMENT",
  },
  {
    id: "deliveryCharges",
    title: "DeliveryCharges",
    type: "item",
    icon: <FaStar size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/zone/AddDeliveryCharges",
  },

  {
    id: "createzone",
    title: "Create Zone",
    type: "item",
    icon: <TbTruckDelivery size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/zone/createzone",
  },

  {
    id: "taxreport",
    title: "Tax Report  ",
    type: "item",
    icon: <FiBarChart2 size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/report/taxReport",
  },

  {
    type: "groupHeader",
    groupTitle: "Pages & MEDIA MANAGEMENT",
  },
  {
    id: "gallery",
    title: "Gallery",
    type: "item",
    icon: <TbTruckDelivery size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/gallery/gallery",
  },
  {
    id: "term & condition",
    title: "Term & Condition",
    type: "item",
    icon: <FaFileSignature size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/termsAndCondition/TAndCList",
  },
  {
    type: "groupHeader",
    groupTitle: "Option MANAGEMENT",
  },
  {
    id: "attributelist",
    title: "AttributeList",
    type: "item",
    icon: <FaCircle size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/options/AttributeList",
  },
  {
    type: "groupHeader",
    groupTitle: "INCOME MANAGEMENT",
  },

  {
    id: "privacypolicy",
    title: "PrivacyPolicy",
    type: "item",
    icon: <FaCog size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/privacyPolicy/privacyPolicy",
  },
  {
    id: "helpAndSupport",
    title: "Help And Support",
    type: "item",
    icon: <FaQuestionCircle size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/helpAndSupport/helpAndSupport",
  },
  {
    id: "logout",
    title: "Logout",
    type: "item",
    icon: <Icon.ArrowRight size={15} />,
    permissions: ["admin", "editor"],
  },

  // {
  //   id: "subscription",
  //   title: "Subscriptions",
  //   type: "item",
  //   // icon: <Icon.Youtube size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/marketing/subscription/subscriptionList",
  // },
  // {
  //   id: "invoiceSetting",
  //   title: "Invoice Setting ",
  //   type: "item",
  //   icon: < FaCircle size={12}/>,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/order/invoiceSetting",
  // },
  // {
  //   id: "invoiceDesign",
  //   title: "Invoice Design ",
  //   type: "item",
  //   icon: < FaCircle size={12}/>,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/order/invoiceDesign",
  // },
  // {
  //   id: "bank",
  //   title: "Bank",
  //   type: "collapse",
  //    icon: < FaHouseDamage size={20} />,
  //    children: [
  //     {
  //       id: "bank",
  //       title: "bank Details",
  //       type: "item",
  //       icon: < FaCircle size={12}/>,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/bank/bank",
  //     },
  //   ]
  // },
  //     {
  //       id: "pushnotification",
  //       title: "Push Notification",
  //       type: "item",
  //       icon: < FaCircle size={12}/>,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/marketing/pushnotification/addPushnotification",
  //     },

  //      {
  //        id: "variantList",
  //        title: "Variant",
  //        type: "item",
  //        icon: <Icon.Circle size={12} />,
  //        permissions: ["admin", "editor"],
  //        navLink: "/app/productManagement/variant/variantList",
  //      },
  //      {
  //        id: "unitsList",
  //        title: "Units",
  //        type: "item",
  //        icon: <Icon.Circle size={12} />,
  //        permissions: ["admin", "editor"],
  //        navLink: "/app/productManagement/units/unitsList",
  //     },
];
export default navigationConfig;
