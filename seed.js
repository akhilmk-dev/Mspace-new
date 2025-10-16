// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// require("dotenv").config();

// const Role = require("./models/Role");
// const Permission = require("./models/Permission");
// const User = require("./models/User");

// const MONGO_URL = process.env.MONGO_URL;

// async function seed() {
//   try {
//     await mongoose.connect(MONGO_URL);
//     console.log("Connected to MongoDB");

//     // ----------------------
//     // 1Seed Permissions (with fixed _id)
//     // ----------------------
//     const permissionsData = [
//         { _id: mongoose.Types.ObjectId("68c7f08ff7eb4fa74534f905"), permission_name: "Dashboard", page_url: "/dashboard", group: "Dashboard", createdAt: new Date("2025-09-15T10:55:11.842Z"), updatedAt: new Date("2025-09-15T10:55:11.842Z") },
//         { _id: mongoose.Types.ObjectId("68c7f0b5f7eb4fa74534f908"), permission_name: "Add User", page_url: "/users", group: "Users", createdAt: new Date("2025-09-15T10:55:49.230Z"), updatedAt: new Date("2025-09-15T10:55:49.230Z") },
//         { _id: mongoose.Types.ObjectId("68c7f0bbf7eb4fa74534f90b"), permission_name: "Edit User", page_url: "/users", group: "Users", createdAt: new Date("2025-09-15T10:55:55.736Z"), updatedAt: new Date("2025-09-15T10:55:55.736Z") },
//         { _id: mongoose.Types.ObjectId("68c7f0c2f7eb4fa74534f90e"), permission_name: "Delete User", page_url: "/users", group: "Users", createdAt: new Date("2025-09-15T10:56:02.058Z"), updatedAt: new Date("2025-09-15T10:56:02.058Z") },
//         { _id: mongoose.Types.ObjectId("68c7f0cbf7eb4fa74534f911"), permission_name: "List User", page_url: "/users", group: "Users", createdAt: new Date("2025-09-15T10:56:11.835Z"), updatedAt: new Date("2025-09-15T10:56:11.835Z") },
//         { _id: mongoose.Types.ObjectId("68c7f0eef7eb4fa74534f914"), permission_name: "Add Role", page_url: "/createRole", group: "Roles", createdAt: new Date("2025-09-15T10:56:46.859Z"), updatedAt: new Date("2025-09-15T10:56:46.859Z") },
//         { _id: mongoose.Types.ObjectId("68c7f0f5f7eb4fa74534f917"), permission_name: "Edit Role", page_url: "/roles", group: "Roles", createdAt: new Date("2025-09-15T10:56:53.111Z"), updatedAt: new Date("2025-09-15T10:56:53.111Z") },
//         { _id: mongoose.Types.ObjectId("68c7f0fff7eb4fa74534f91a"), permission_name: "Delete Role", page_url: "/roles", group: "Roles", createdAt: new Date("2025-09-15T10:57:03.610Z"), updatedAt: new Date("2025-09-15T10:57:03.610Z") },
//         { _id: mongoose.Types.ObjectId("68c7f11af7eb4fa74534f91d"), permission_name: "List Role", page_url: "/roles", group: "Roles", createdAt: new Date("2025-09-15T10:57:30.170Z"), updatedAt: new Date("2025-09-15T10:57:30.170Z") },
//         { _id: mongoose.Types.ObjectId("68ca7e3073d2b344669f8444"), permission_name: "Change Password", page_url: "/change-password", group: "Profile", createdAt: new Date("2025-09-17T09:24:00.155Z"), updatedAt: new Date("2025-09-17T09:24:00.155Z") },
//         { _id: mongoose.Types.ObjectId("68ca7e6673d2b344669f8447"), permission_name: "Profile", page_url: "/profile", group: "Profile", createdAt: new Date("2025-09-17T09:24:54.362Z"), updatedAt: new Date("2025-09-17T09:24:54.362Z") },
//         { _id: mongoose.Types.ObjectId("68cba32449c628804e620047"), permission_name: "Add Course", page_url: "/courses", group: "Course", createdAt: new Date("2025-09-18T06:13:56.360Z"), updatedAt: new Date("2025-09-18T06:13:56.360Z") },
//         { _id: mongoose.Types.ObjectId("68cba32c49c628804e62004a"), permission_name: "Edit Course", page_url: "/courses", group: "Course", createdAt: new Date("2025-09-18T06:14:04.006Z"), updatedAt: new Date("2025-09-18T06:14:04.006Z") },
//         { _id: mongoose.Types.ObjectId("68cba33149c628804e62004d"), permission_name: "List Course", page_url: "/courses", group: "Course", createdAt: new Date("2025-09-18T06:14:09.217Z"), updatedAt: new Date("2025-09-18T06:14:09.217Z") },
//         { _id: mongoose.Types.ObjectId("68cba34449c628804e620051"), permission_name: "Delete Course", page_url: "/courses", group: "Course", createdAt: new Date("2025-09-18T06:14:28.400Z"), updatedAt: new Date("2025-09-18T06:14:28.400Z") },
//         { _id: mongoose.Types.ObjectId("68cbae325fdf71fd3ed4f09c"), permission_name: "Delete Module", page_url: "/modules", group: "Module", createdAt: new Date("2025-09-18T07:01:06.822Z"), updatedAt: new Date("2025-09-18T07:01:06.822Z") },
//         { _id: mongoose.Types.ObjectId("68cbae3b5fdf71fd3ed4f09f"), permission_name: "Add Module", page_url: "/modules", group: "Module", createdAt: new Date("2025-09-18T07:01:15.688Z"), updatedAt: new Date("2025-09-18T07:01:15.688Z") },
//         { _id: mongoose.Types.ObjectId("68cbae415fdf71fd3ed4f0a2"), permission_name: "Edit Module", page_url: "/modules", group: "Module", createdAt: new Date("2025-09-18T07:01:21.315Z"), updatedAt: new Date("2025-09-18T07:01:21.315Z") },
//         { _id: mongoose.Types.ObjectId("68cbae505fdf71fd3ed4f0a5"), permission_name: "List Module", page_url: "/modules", group: "Module", createdAt: new Date("2025-09-18T07:01:36.204Z"), updatedAt: new Date("2025-09-18T07:01:36.204Z") },
//         { _id: mongoose.Types.ObjectId("68cce57f3186e7a9cd519fd1"), permission_name: "Delete Chapter", page_url: "/chapters", group: "Chapter", createdAt: new Date("2025-09-19T05:09:19.994Z"), updatedAt: new Date("2025-09-19T05:09:19.994Z") },
//         { _id: mongoose.Types.ObjectId("68cce5873186e7a9cd519fd4"), permission_name: "Add Chapter", page_url: "/chapters", group: "Chapter", createdAt: new Date("2025-09-19T05:09:27.023Z"), updatedAt: new Date("2025-09-19T05:09:27.023Z") },
//         { _id: mongoose.Types.ObjectId("68cce5923186e7a9cd519fd7"), permission_name: "Edit Chapter", page_url: "/chapters", group: "Chapter", createdAt: new Date("2025-09-19T05:09:38.809Z"), updatedAt: new Date("2025-09-19T05:09:38.809Z") },
//         { _id: mongoose.Types.ObjectId("68cce5a33186e7a9cd519fda"), permission_name: "List Chapter", page_url: "/chapters", group: "Chapter", createdAt: new Date("2025-09-19T05:09:55.388Z"), updatedAt: new Date("2025-09-19T05:09:55.388Z") },
//         { _id: mongoose.Types.ObjectId("68cd264abb28956a01b12fa7"), permission_name: "List Student", page_url: "/students", group: "Student", createdAt: new Date("2025-09-19T09:45:46.413Z"), updatedAt: new Date("2025-09-19T09:45:46.413Z") },
//         { _id: mongoose.Types.ObjectId("68cd2651bb28956a01b12faa"), permission_name: "Add Student", page_url: "/students", group: "Student", createdAt: new Date("2025-09-19T09:45:53.636Z"), updatedAt: new Date("2025-09-19T09:45:53.636Z") },
//         { _id: mongoose.Types.ObjectId("68cd265abb28956a01b12fad"), permission_name: "Edit Student", page_url: "/students", group: "Student", createdAt: new Date("2025-09-19T09:46:02.648Z"), updatedAt: new Date("2025-09-19T09:46:02.648Z") },
//         { _id: mongoose.Types.ObjectId("68cd2672bb28956a01b12fb0"), permission_name: "Delete Student", page_url: "/students", group: "Student", createdAt: new Date("2025-09-19T09:46:26.469Z"), updatedAt: new Date("2025-09-19T09:46:26.469Z") },
//         { _id: mongoose.Types.ObjectId("68d0f18cc7a5f07edcb3126c"), permission_name: "List Tutor", page_url: "/tutors", group: "Tutor", createdAt: new Date("2025-09-22T06:49:48.951Z"), updatedAt: new Date("2025-09-22T06:49:48.951Z") },
//         { _id: mongoose.Types.ObjectId("68d0f19cc7a5f07edcb3126f"), permission_name: "Delete Tutor", page_url: "/tutors", group: "Tutor", createdAt: new Date("2025-09-22T06:50:04.522Z"), updatedAt: new Date("2025-09-22T06:50:04.522Z") },
//         { _id: mongoose.Types.ObjectId("68d0f1a6c7a5f07edcb31272"), permission_name: "Edit Tutor", page_url: "/tutors", group: "Tutor", createdAt: new Date("2025-09-22T06:50:14.334Z"), updatedAt: new Date("2025-09-22T06:50:14.334Z") },
//         { _id: mongoose.Types.ObjectId("68d0f1adc7a5f07edcb31275"), permission_name: "Add Tutor", page_url: "/tutors", group: "Tutor", createdAt: new Date("2025-09-22T06:50:21.269Z"), updatedAt: new Date("2025-09-22T06:50:21.269Z") },
//         { _id: mongoose.Types.ObjectId("68e388fe06343a648212d9b0"), permission_name: "List Lesson", page_url: "/lessons", group: "Lessons", createdAt: new Date("2025-10-06T09:16:46.548Z"), updatedAt: new Date("2025-10-06T09:16:46.548Z") },
//         { _id: mongoose.Types.ObjectId("68e3a90526a930b2dae39656"), permission_name: "Add Lesson", page_url: "/lesson-add", group: "Lessons", createdAt: new Date("2025-10-06T11:33:25.930Z"), updatedAt: new Date("2025-10-06T11:33:25.930Z") },
//         { _id: mongoose.Types.ObjectId("68e75b8ff88222d729ff1d5a"), permission_name: "Assignment Add", page_url: "/assignments", group: "Assignments", createdAt: new Date("2025-10-09T06:51:59.605Z"), updatedAt: new Date("2025-10-09T06:51:59.605Z") },
//         { _id: mongoose.Types.ObjectId("68e75ba6f88222d729ff1d5d"), permission_name: "Assignment Edit", page_url: "/assignments", group: "Assignments", createdAt: new Date("2025-10-09T06:52:22.070Z"), updatedAt: new Date("2025-10-09T06:52:22.070Z") },
//         { _id: mongoose.Types.ObjectId("68e75bb2f88222d729ff1d60"), permission_name: "Assignment Delete", page_url: "/assignments", group: "Assignments", createdAt: new Date("2025-10-09T06:52:34.227Z"), updatedAt: new Date("2025-10-09T06:52:34.227Z") },
//         { _id: mongoose.Types.ObjectId("68e75bc0f88222d729ff1d63"), permission_name: "Assignment List", page_url: "/assignments", group: "Assignments", createdAt: new Date("2025-10-09T06:52:48.251Z"), updatedAt: new Date("2025-10-09T06:52:48.251Z") },
//         { _id: mongoose.Types.ObjectId("68e78a9d34f78d553a397dee"), permission_name: "Edit Lesson", page_url: "/lessons", group: "Lessons", createdAt: new Date("2025-10-09T10:12:45.994Z"), updatedAt: new Date("2025-10-09T10:12:45.994Z") },
//         { _id: mongoose.Types.ObjectId("68e7b83d13fe54eac659c93f"), permission_name: "Delete Lesson", page_url: "/lessons", group: "Lessons", createdAt: new Date("2025-10-09T13:27:25.763Z"), updatedAt: new Date("2025-10-09T13:27:25.763Z") },
//         { _id: mongoose.Types.ObjectId("68ecae6328b9928bbff49e01"), permission_name: "List Attendance", page_url: "/attendance", group: "Attendance", createdAt: new Date("2025-10-13T07:46:43.161Z"), updatedAt: new Date("2025-10-13T07:46:43.161Z") },
//         { _id: mongoose.Types.ObjectId("68eddf7e7a6b557e569fff11"), permission_name: "View Student", page_url: "/profile-view", group: "Student", createdAt: new Date("2025-10-14T05:28:30.356Z"), updatedAt: new Date("2025-10-14T05:28:30.356Z") },
//         { _id: mongoose.Types.ObjectId("68ee2638881757a82f77d259"), permission_name: "View Tutor", page_url: "/view-tutor-profile", group: "Tutor", createdAt: new Date("2025-10-14T10:30:16.231Z"), updatedAt: new Date("2025-10-14T10:30:16.231Z") },
//         { _id: mongoose.Types.ObjectId("68ee30ba881757a82f77d7ed"), permission_name: "List Questions & Answers", page_url: "/questions-and-answers", group: "Questions & Answers", createdAt: new Date("2025-10-14T11:15:06.644Z"), updatedAt: new Date("2025-10-14T11:15:06.644Z") }
//       ];

//     for (const perm of permissionsData) {
//       await Permission.updateOne(
//         { _id: perm._id },
//         { $setOnInsert: perm },
//         { upsert: true }
//       );
//       console.log(`Permission seeded: ${perm.permission_name}`);
//     }

//     // ----------------------
//     // Seed Roles (with fixed _id)
//     // ----------------------
//     const rolesData = [
//       {
//         _id: mongoose.Types.ObjectId("650000000000000000000010"),
//         role_name: "Admin",
//         permissions: permissionsData.map((p) => p._id), // Admin gets all
//       },
//       {
//         _id: mongoose.Types.ObjectId("650000000000000000000011"),
//         role_name: "Tutor",
//         permissions: [], // Assign specific if needed
//       },
//       {
//         _id: mongoose.Types.ObjectId("650000000000000000000012"),
//         role_name: "Student",
//         permissions: [],
//       },
//     ];

//     for (const role of rolesData) {
//       await Role.updateOne(
//         { _id: role._id },
//         { $setOnInsert: role },
//         { upsert: true }
//       );
//       console.log(`Role seeded: ${role.role_name}`);
//     }

//     // ----------------------
//     // 3 Seed Admin User (with fixed _id)
//     // ----------------------
//     const adminUserId = mongoose.Types.ObjectId("650000000000000000000100");
//     const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";
//     const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

//     const passwordHash = await bcrypt.hash(adminPassword, 10);

//     await User.updateOne(
//       { _id: adminUserId },
//       {
//         $setOnInsert: {
//           _id: adminUserId,
//           name: "Admin",
//           email: adminEmail,
//           phone: "0000000000",
//           passwordHash,
//           roleId: rolesData[0]._id, // Admin role
//           status: true,
//         },
//       },
//       { upsert: true }
//     );
//     console.log("Admin user seeded");

//     console.log("✅ Seeding completed!");
//     process.exit(0);

//   } catch (err) {
//     console.error("Seeding failed", err);
//     process.exit(1);
//   }
// }

// seed();
