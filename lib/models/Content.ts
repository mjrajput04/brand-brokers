import mongoose, { Schema, models } from "mongoose";

const ServiceSchema = new Schema({
  title: { type: String, required: true },
  items: [{ type: String }],
}, { timestamps: true });

const CaseStudySchema = new Schema({
  num: String, brand: String, objective: String,
  strategy: String, execution: [String],
  stats: [{ value: String, label: String }],
}, { timestamps: true });

const TeamSchema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
}, { timestamps: true });

const ClientSchema = new Schema({
  name: { type: String, required: true },
}, { timestamps: true });

const RosterSchema = new Schema({
  handle: { type: String, required: true },
  niche: { type: String, required: true },
  followers: { type: String, required: true },
}, { timestamps: true });

export const Service = models.Service || mongoose.model("Service", ServiceSchema);
export const CaseStudy = models.CaseStudy || mongoose.model("CaseStudy", CaseStudySchema);
export const Team = models.Team || mongoose.model("Team", TeamSchema);
export const Client = models.Client || mongoose.model("Client", ClientSchema);
export const Roster = models.Roster || mongoose.model("Roster", RosterSchema);
