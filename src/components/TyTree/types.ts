import { Component } from "vue";
import { Auth } from "@/constants/back-api";

interface DropdownItem {
  title: string;
  auth?: Auth;
  icon: Component;
}

export interface TyTreeParentDropdownItems extends DropdownItem {
  onClick: () => void;
}

export interface TyTreeDropdownItems extends DropdownItem {
  onClick: (id: string, name: string) => void;
}
