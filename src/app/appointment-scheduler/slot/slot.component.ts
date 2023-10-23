import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { slotDetails } from "src/app/sample-data/sample-data";
import { TokenStatus } from "src/types/enums";

/**
 * Contains slot information
 */
export interface SlotInformation {
  /**
   * contains slot id
   */
  id: string;
  /**
   * contains name of the employee
   */
  name: string;
  /**
   * start time of the employee
   */
  startTime: string;
  /**
   * end time of the employee
   */
  endTime: string;

  /**
   * Contains visitors list
   */
  visitors: visitor[];
}

/**
 * Contains visitor information
 */
export interface visitor {
  /**
   * contains visitor name
   */
  name: string;
  /**
   * contains visitor phone number
   */
  phoneNumber: string;
  /**
   * contains visitor token status
   */
  status: TokenStatus;
  /**
   * contains visitor token number
   */
  tokenNumber: number;

  /**
   * contains visitor starting time
   */
  startTime?: string;

  /**
   * contains visitor ending time
   */
  endTime?: string;
}

@Component({
  selector: "app-slot",
  templateUrl: "slot.component.html",
  styleUrls: ["slot.component.scss"],
})
export class SlotComponent implements OnInit {
  /**
   * contains the current slot information
   */
  public slotInfo!: SlotInformation;

  /**
   * contains the visitor name to be added
   */
  public visitorName: string = "";

  /**
   * contains the visitor phone number to be added
   */
  public visitorPhoneNumber: string = "";

  constructor(private _route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.loadSlotInfo();
  }

  /**
   * Used to add new visitor in the slot
   *
   * @param name visitor name
   * @param phoneNumber visitor phone number
   */
  public addNewVisitor(name: string, phoneNumber: string) {
    this.slotInfo.visitors.push({
      name: name,
      phoneNumber: phoneNumber,
      status: TokenStatus.NOT_STARTED,
      tokenNumber: this.slotInfo.visitors.length + 1,
    });

    this.restInputs();
  }

  /**
   * Resets inputs of adding new visitor
   */
  private restInputs() {
    this.visitorName = "";
    this.visitorPhoneNumber = "";
  }

  /**
   * It loads slot information if exists
   */
  private loadSlotInfo() {
    // Used to get slot information form the route param which has current slot id
    const id = this._route.snapshot.paramMap.get("slotId");
    const slot = slotDetails.find((slot) => slot.id === id);
    if (slot) this.slotInfo = slot;
  }
}
