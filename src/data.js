/** 108 real cards drawn from freight-fraud-taxonomy/taxonomy/patterns/FFT-001..012 — genuine risk indicators (flag) and genuine innocent explanations (clear), not invented for the game. */
(function (global) {
  var CARDS = [
  {
    "type": "flag",
    "patternId": "FFT-001",
    "patternName": "Double Brokering",
    "text": "Carrier accepts a rate materially below the prevailing corridor market rate without a plausible backhaul explanation",
    "reveal": "On its own this is only commercial behaviour. It gains weight in combination with a thin asset profile."
  },
  {
    "type": "flag",
    "patternId": "FFT-001",
    "patternName": "Double Brokering",
    "text": "Registered fleet size or reported power units cannot plausibly cover the volume the entity is bidding on",
    "reveal": "A real indicator of Double Brokering."
  },
  {
    "type": "flag",
    "patternId": "FFT-001",
    "patternName": "Double Brokering",
    "text": "Contact telephone or email domain differs from the domain registered to the licensed operator",
    "reveal": "A real indicator of Double Brokering."
  },
  {
    "type": "flag",
    "patternId": "FFT-001",
    "patternName": "Double Brokering",
    "text": "Tractor unit, trailer plate or driver name at pickup does not match the dispatch confirmation",
    "reveal": "This is the single strongest and cheapest detection point. It requires only that someone compares two fields at the gate."
  },
  {
    "type": "flag",
    "patternId": "FFT-001",
    "patternName": "Double Brokering",
    "text": "Telematics or ELD feed is unavailable, and position updates arrive only as manual driver check calls",
    "reveal": "A real indicator of Double Brokering."
  },
  {
    "type": "flag",
    "patternId": "FFT-001",
    "patternName": "Double Brokering",
    "text": "An unknown third carrier contacts the shipper directly chasing payment for the same load",
    "reveal": "Near-conclusive. An unpaid subcontractor surfacing is often the first time the shipper learns the load was re-brokered."
  },
  {
    "type": "flag",
    "patternId": "FFT-001",
    "patternName": "Double Brokering",
    "text": "Claim is submitted by, or on behalf of, an entity that does not appear anywhere in the contractual chain",
    "reveal": "A real indicator of Double Brokering."
  },
  {
    "type": "clear",
    "patternId": "FFT-001",
    "patternName": "Double Brokering",
    "text": "A different tractor and driver arrive than were confirmed at dispatch.",
    "reveal": "Legitimate last-minute dispatch reallocation inside the same operator, which is routine in day-to-day fleet management."
  },
  {
    "type": "clear",
    "patternId": "FFT-001",
    "patternName": "Double Brokering",
    "text": "A subcontracted carrier appears on the transport document.",
    "reveal": "Contractually permitted subcontracting that was disclosed and approved in the transport agreement."
  },
  {
    "type": "clear",
    "patternId": "FFT-001",
    "patternName": "Double Brokering",
    "text": "A very low accepted rate.",
    "reveal": "A genuine repositioning move where the carrier needs to relocate equipment and would otherwise run empty."
  },
  {
    "type": "flag",
    "patternId": "FFT-002",
    "patternName": "Phantom Carrier",
    "text": "Company registered within the last six to twelve months with no verifiable transport operating history",
    "reveal": "New companies are legitimate and common. Weight comes from combination, not from newness alone."
  },
  {
    "type": "flag",
    "patternId": "FFT-002",
    "patternName": "Phantom Carrier",
    "text": "Registered address is a virtual office, mailbox service, or an address shared with unrelated companies",
    "reveal": "A real indicator of Phantom Carrier."
  },
  {
    "type": "flag",
    "patternId": "FFT-002",
    "patternName": "Phantom Carrier",
    "text": "Insurance certificate is supplied as an image or edited document rather than confirmed by the insurer or broker directly",
    "reveal": "See FFT-011 for the detail of certificate fraud."
  },
  {
    "type": "flag",
    "patternId": "FFT-002",
    "patternName": "Phantom Carrier",
    "text": "Bids concentrate almost exclusively on high value-density, easily resold commodities such as consumer electronics, pharmaceuticals, tobacco, or branded apparel",
    "reveal": "A real indicator of Phantom Carrier."
  },
  {
    "type": "flag",
    "patternId": "FFT-002",
    "patternName": "Phantom Carrier",
    "text": "Contact identity has no verifiable footprint: no traceable landline, no consistent business presence, personal email domain",
    "reveal": "A real indicator of Phantom Carrier."
  },
  {
    "type": "flag",
    "patternId": "FFT-002",
    "patternName": "Phantom Carrier",
    "text": "Vehicle presenting at pickup carries no operator livery and plates are not registered to the contracting entity",
    "reveal": "A real indicator of Phantom Carrier."
  },
  {
    "type": "flag",
    "patternId": "FFT-002",
    "patternName": "Phantom Carrier",
    "text": "All contact stops immediately after loading and the vehicle stops reporting position",
    "reveal": "A real indicator of Phantom Carrier."
  },
  {
    "type": "flag",
    "patternId": "FFT-002",
    "patternName": "Phantom Carrier",
    "text": "Registered address, on inspection, has no transport operation at it",
    "reveal": "A real indicator of Phantom Carrier."
  },
  {
    "type": "flag",
    "patternId": "FFT-002",
    "patternName": "Phantom Carrier",
    "text": "The same principals or the same address reappear behind a newly registered entity",
    "reveal": "This is what makes the pattern repeatable, and why case records must be kept against people and addresses, not just trading names."
  },
  {
    "type": "clear",
    "patternId": "FFT-002",
    "patternName": "Phantom Carrier",
    "text": "A newly registered company with no transport history bidding on freight.",
    "reveal": "A genuine new entrant, or a newly incorporated vehicle of an existing operator restructuring its business."
  },
  {
    "type": "clear",
    "patternId": "FFT-002",
    "patternName": "Phantom Carrier",
    "text": "A shared or serviced office address.",
    "reveal": "Small legitimate hauliers and freight agents commonly use serviced offices while operating from a separate yard."
  },
  {
    "type": "flag",
    "patternId": "FFT-003",
    "patternName": "Carrier Identity Takeover",
    "text": "Contact domain is a close variant of the operator's genuine domain, differing by a character, a suffix or a top-level domain",
    "reveal": "The strongest single indicator of this pattern, and cheap to check."
  },
  {
    "type": "flag",
    "patternId": "FFT-003",
    "patternName": "Carrier Identity Takeover",
    "text": "Contact telephone or email details for a known licence number have changed recently and the change was not initiated through an existing relationship",
    "reveal": "A real indicator of Carrier Identity Takeover."
  },
  {
    "type": "flag",
    "patternId": "FFT-003",
    "patternName": "Carrier Identity Takeover",
    "text": "Bank details supplied do not match the account name of the licensed operator, or are held in a different country from the operator",
    "reveal": "A real indicator of Carrier Identity Takeover."
  },
  {
    "type": "flag",
    "patternId": "FFT-003",
    "patternName": "Carrier Identity Takeover",
    "text": "Licence is valid but the operator has no recent activity, filings or movements",
    "reveal": "A real indicator of Carrier Identity Takeover."
  },
  {
    "type": "flag",
    "patternId": "FFT-003",
    "patternName": "Carrier Identity Takeover",
    "text": "Equipment presenting at pickup is not registered to the licence holder",
    "reveal": "A real indicator of Carrier Identity Takeover."
  },
  {
    "type": "flag",
    "patternId": "FFT-003",
    "patternName": "Carrier Identity Takeover",
    "text": "The genuine operator denies all knowledge of the movement when contacted on independently obtained details",
    "reveal": "Always re-contact using details obtained independently. Contacting the number supplied by the perpetrator simply reaches the perpetrator."
  },
  {
    "type": "clear",
    "patternId": "FFT-003",
    "patternName": "Carrier Identity Takeover",
    "text": "Contact details for an existing carrier have changed.",
    "reveal": "Genuine rebranding, domain migration, office relocation, or acquisition."
  },
  {
    "type": "clear",
    "patternId": "FFT-003",
    "patternName": "Carrier Identity Takeover",
    "text": "Bank account name differs from the operator name.",
    "reveal": "Legitimate use of a factoring company or a group treasury account, which is common in road freight."
  },
  {
    "type": "flag",
    "patternId": "FFT-004",
    "patternName": "Fictitious Pickup",
    "text": "Requests for load reference numbers, collection windows or consignee detail arrive from an unverified channel",
    "reveal": "A real indicator of Fictitious Pickup."
  },
  {
    "type": "flag",
    "patternId": "FFT-004",
    "patternName": "Fictitious Pickup",
    "text": "Driver arrives early, ahead of the booked window, and applies pressure to be loaded quickly",
    "reveal": "Common enough legitimately that it must be combined with an identity mismatch to carry weight."
  },
  {
    "type": "flag",
    "patternId": "FFT-004",
    "patternName": "Fictitious Pickup",
    "text": "Driver identity document does not match the name on the dispatch confirmation",
    "reveal": "A real indicator of Fictitious Pickup."
  },
  {
    "type": "flag",
    "patternId": "FFT-004",
    "patternName": "Fictitious Pickup",
    "text": "Tractor or trailer plate does not match the dispatch record",
    "reveal": "A real indicator of Fictitious Pickup."
  },
  {
    "type": "flag",
    "patternId": "FFT-004",
    "patternName": "Fictitious Pickup",
    "text": "Paperwork is presented as a photograph or printout with inconsistent formatting, or the driver cannot produce the transport order through the carrier's own system",
    "reveal": "A real indicator of Fictitious Pickup."
  },
  {
    "type": "flag",
    "patternId": "FFT-004",
    "patternName": "Fictitious Pickup",
    "text": "Two vehicles present for the same load reference",
    "reveal": "Effectively conclusive, and the reason gate logs should be checked against open bookings in real time rather than reconciled later."
  },
  {
    "type": "flag",
    "patternId": "FFT-004",
    "patternName": "Fictitious Pickup",
    "text": "The contracted carrier reports arriving to find the load already collected",
    "reveal": "A real indicator of Fictitious Pickup."
  },
  {
    "type": "clear",
    "patternId": "FFT-004",
    "patternName": "Fictitious Pickup",
    "text": "An unexpected driver and vehicle arrive for a booked load.",
    "reveal": "A legitimate last-minute reallocation within the operator, or an approved subcontractor, that was not communicated to the dock."
  },
  {
    "type": "clear",
    "patternId": "FFT-004",
    "patternName": "Fictitious Pickup",
    "text": "Driver presents printed or photographed paperwork.",
    "reveal": "Normal practice for many small operators, particularly on subcontracted or spot work."
  },
  {
    "type": "flag",
    "patternId": "FFT-005",
    "patternName": "Systematic Pilferage",
    "text": "Shortage rate for a specific route, driver, transfer point or consignee is persistently above the network baseline",
    "reveal": "This pattern is invisible at event level by design. Detection is entirely a matter of aggregation."
  },
  {
    "type": "flag",
    "patternId": "FFT-005",
    "patternName": "Systematic Pilferage",
    "text": "Shortages cluster on high value-density, easily resold items within otherwise mixed consignments",
    "reveal": "A real indicator of Systematic Pilferage."
  },
  {
    "type": "flag",
    "patternId": "FFT-005",
    "patternName": "Systematic Pilferage",
    "text": "Shortage quantities sit consistently just below the threshold that would trigger a formal investigation",
    "reveal": "A distribution that bunches immediately under a control threshold indicates knowledge of the threshold, which narrows the population considerably."
  },
  {
    "type": "flag",
    "patternId": "FFT-005",
    "patternName": "Systematic Pilferage",
    "text": "Discrepancies persist on a lane after the consignee and origin count processes have both been independently verified",
    "reveal": "A real indicator of Systematic Pilferage."
  },
  {
    "type": "flag",
    "patternId": "FFT-005",
    "patternName": "Systematic Pilferage",
    "text": "Unexplained stops, or dwell time materially above the corridor norm, correlate with the affected movements",
    "reveal": "A real indicator of Systematic Pilferage."
  },
  {
    "type": "flag",
    "patternId": "FFT-005",
    "patternName": "Systematic Pilferage",
    "text": "Seal number recorded at destination differs from the number recorded at origin, or the seal is reported as replaced in transit",
    "reveal": "See FFT-007."
  },
  {
    "type": "clear",
    "patternId": "FFT-005",
    "patternName": "Systematic Pilferage",
    "text": "Persistent shortages on a lane.",
    "reveal": "A genuine count, labelling or system error at origin, or a units-of-measure mismatch between systems."
  },
  {
    "type": "clear",
    "patternId": "FFT-005",
    "patternName": "Systematic Pilferage",
    "text": "Shortages concentrated on one driver.",
    "reveal": "That driver is simply assigned disproportionately to the affected lane or shift."
  },
  {
    "type": "clear",
    "patternId": "FFT-005",
    "patternName": "Systematic Pilferage",
    "text": "Losses concentrated on high-value items.",
    "reveal": "High-value items are more likely to be counted carefully and therefore more likely to have discrepancies detected at all."
  },
  {
    "type": "flag",
    "patternId": "FFT-006",
    "patternName": "Unsecured Parking Theft",
    "text": "Planned route and schedule force a rest period in a corridor segment with no certified secure parking within range",
    "reveal": "This is the key preventable exposure, and it is visible before the vehicle ever moves."
  },
  {
    "type": "flag",
    "patternId": "FFT-006",
    "patternName": "Unsecured Parking Theft",
    "text": "High value-density commodity is planned to move in a soft-sided trailer",
    "reveal": "A real indicator of Unsecured Parking Theft."
  },
  {
    "type": "flag",
    "patternId": "FFT-006",
    "patternName": "Unsecured Parking Theft",
    "text": "Overnight stop recorded at a location that is not a certified secure parking area",
    "reveal": "A real indicator of Unsecured Parking Theft."
  },
  {
    "type": "flag",
    "patternId": "FFT-006",
    "patternName": "Unsecured Parking Theft",
    "text": "Stop duration of several hours in a known high-incidence corridor segment",
    "reveal": "A real indicator of Unsecured Parking Theft."
  },
  {
    "type": "flag",
    "patternId": "FFT-006",
    "patternName": "Unsecured Parking Theft",
    "text": "Trailer door or curtain sensor triggers during a rest period",
    "reveal": "A real indicator of Unsecured Parking Theft."
  },
  {
    "type": "flag",
    "patternId": "FFT-006",
    "patternName": "Unsecured Parking Theft",
    "text": "Loss discovered at delivery with no identified stop, indicating that stop-level visibility is absent",
    "reveal": "Not an indicator of the crime so much as of a control gap that makes this pattern viable and unattributable."
  },
  {
    "type": "clear",
    "patternId": "FFT-006",
    "patternName": "Unsecured Parking Theft",
    "text": "A long unplanned stop in a high-risk area.",
    "reveal": "A breakdown, traffic incident, border queue or enforced congestion stop, none of which the driver chose."
  },
  {
    "type": "clear",
    "patternId": "FFT-006",
    "patternName": "Unsecured Parking Theft",
    "text": "Curtain damage at delivery.",
    "reveal": "Accidental damage from loading equipment or road debris, which is common on soft-sided equipment."
  },
  {
    "type": "flag",
    "patternId": "FFT-007",
    "patternName": "Seal Tampering and Reseal Fraud",
    "text": "Seal number recorded at destination does not match the number recorded at origin",
    "reveal": "Conclusive of substitution, but only detectable if the number is actually recorded at both ends. In practice the control most often fails because the number is never captured, not because it matches."
  },
  {
    "type": "flag",
    "patternId": "FFT-007",
    "patternName": "Seal Tampering and Reseal Fraud",
    "text": "Seal is intact but the consignment is short",
    "reveal": "A real indicator of Seal Tampering and Reseal Fraud."
  },
  {
    "type": "flag",
    "patternId": "FFT-007",
    "patternName": "Seal Tampering and Reseal Fraud",
    "text": "Seal type, colour or issuer differs from the one issued at origin",
    "reveal": "A real indicator of Seal Tampering and Reseal Fraud."
  },
  {
    "type": "flag",
    "patternId": "FFT-007",
    "patternName": "Seal Tampering and Reseal Fraud",
    "text": "Seal reported as broken and replaced in transit for an operational reason, such as an inspection, without independent corroboration",
    "reveal": "Legitimate inspections do break seals. The indicator is the absence of corroborating authority documentation, not the replacement itself."
  },
  {
    "type": "flag",
    "patternId": "FFT-007",
    "patternName": "Seal Tampering and Reseal Fraud",
    "text": "Physical evidence of defeat on the seal body: heat marks, adhesive residue, misaligned serial, deformation",
    "reveal": "A real indicator of Seal Tampering and Reseal Fraud."
  },
  {
    "type": "flag",
    "patternId": "FFT-007",
    "patternName": "Seal Tampering and Reseal Fraud",
    "text": "Seals for a lane are drawn from a range that is not centrally controlled, or the sequence has gaps",
    "reveal": "A real indicator of Seal Tampering and Reseal Fraud."
  },
  {
    "type": "clear",
    "patternId": "FFT-007",
    "patternName": "Seal Tampering and Reseal Fraud",
    "text": "Seal number at destination differs from origin.",
    "reveal": "A lawful customs, police or roadside inspection broke the original seal and applied a new one, which is routine on international movements."
  },
  {
    "type": "clear",
    "patternId": "FFT-007",
    "patternName": "Seal Tampering and Reseal Fraud",
    "text": "Seal appears damaged on arrival.",
    "reveal": "Mechanical or thermal damage in normal transit, particularly on long or multimodal moves."
  },
  {
    "type": "flag",
    "patternId": "FFT-008",
    "patternName": "GPS Spoofing and Telematics Manipulation",
    "text": "Position jumps a distance that could not be covered in the elapsed time",
    "reveal": "A simple speed-plausibility check between consecutive fixes catches most crude spoofing and is rarely implemented."
  },
  {
    "type": "flag",
    "patternId": "FFT-008",
    "patternName": "GPS Spoofing and Telematics Manipulation",
    "text": "Reported position is static or repeats identically while engine, odometer or fuel data indicate motion",
    "reveal": "Cross-source contradiction is the most reliable detection available, because falsifying every channel consistently is difficult."
  },
  {
    "type": "flag",
    "patternId": "FFT-008",
    "patternName": "GPS Spoofing and Telematics Manipulation",
    "text": "Complete loss of signal in an area with no known coverage problem, particularly during a rest period",
    "reveal": "A real indicator of GPS Spoofing and Telematics Manipulation."
  },
  {
    "type": "flag",
    "patternId": "FFT-008",
    "patternName": "GPS Spoofing and Telematics Manipulation",
    "text": "Reported satellite count or signal quality drops abruptly to an implausible value while the vehicle is in open terrain",
    "reveal": "A real indicator of GPS Spoofing and Telematics Manipulation."
  },
  {
    "type": "flag",
    "patternId": "FFT-008",
    "patternName": "GPS Spoofing and Telematics Manipulation",
    "text": "Signal loss events recur on the same driver, vehicle or corridor segment rather than being distributed randomly",
    "reveal": "A real indicator of GPS Spoofing and Telematics Manipulation."
  },
  {
    "type": "flag",
    "patternId": "FFT-008",
    "patternName": "GPS Spoofing and Telematics Manipulation",
    "text": "Telematics unit found disconnected, powered down, or physically shielded on inspection",
    "reveal": "A real indicator of GPS Spoofing and Telematics Manipulation."
  },
  {
    "type": "clear",
    "patternId": "FFT-008",
    "patternName": "GPS Spoofing and Telematics Manipulation",
    "text": "Total loss of position data.",
    "reveal": "Genuine coverage failure, tunnel or terrain shadowing, hardware fault, SIM or data plan failure, or regional interference not directed at this vehicle."
  },
  {
    "type": "clear",
    "patternId": "FFT-008",
    "patternName": "GPS Spoofing and Telematics Manipulation",
    "text": "Implausible position jumps.",
    "reveal": "Known receiver artefacts, cold-start errors, multipath in urban canyons, or platform data-processing lag."
  },
  {
    "type": "clear",
    "patternId": "FFT-008",
    "patternName": "GPS Spoofing and Telematics Manipulation",
    "text": "Sustained regional GNSS interference.",
    "reveal": "Documented wide-area interference affecting all users in a region, which is well reported in parts of Europe and is not aimed at any particular vehicle."
  },
  {
    "type": "flag",
    "patternId": "FFT-009",
    "patternName": "Insider Collusion",
    "text": "Losses concentrate on consignments whose value was known internally but not externally visible from packaging or documentation",
    "reveal": "The strongest structural indicator. If the targeting could not have been done from outside, it was informed from inside."
  },
  {
    "type": "flag",
    "patternId": "FFT-009",
    "patternName": "Insider Collusion",
    "text": "Events cluster on a specific shift, gate, workstation or supervisory approval rather than distributing across the operation",
    "reveal": "A real indicator of Insider Collusion."
  },
  {
    "type": "flag",
    "patternId": "FFT-009",
    "patternName": "Insider Collusion",
    "text": "The control that would have caught the loss was, in each case, the one not performed or performed by the same individual",
    "reveal": "A real indicator of Insider Collusion."
  },
  {
    "type": "flag",
    "patternId": "FFT-009",
    "patternName": "Insider Collusion",
    "text": "Access, override or exception authority used outside the pattern normal for that role",
    "reveal": "A real indicator of Insider Collusion."
  },
  {
    "type": "flag",
    "patternId": "FFT-009",
    "patternName": "Insider Collusion",
    "text": "Losses stop abruptly during an unannounced audit or a staffing change and resume afterwards",
    "reveal": "Close to conclusive when it recurs, and it is the reason unannounced controls are worth more than scheduled ones."
  },
  {
    "type": "flag",
    "patternId": "FFT-009",
    "patternName": "Insider Collusion",
    "text": "Undisclosed relationship between an employee with award or approval authority and a counterparty",
    "reveal": "A real indicator of Insider Collusion."
  },
  {
    "type": "clear",
    "patternId": "FFT-009",
    "patternName": "Insider Collusion",
    "text": "Losses concentrated on one shift or individual.",
    "reveal": "That shift or person simply handles more volume, or handles the higher-value flow by design."
  },
  {
    "type": "clear",
    "patternId": "FFT-009",
    "patternName": "Insider Collusion",
    "text": "A control was not performed on the affected movements.",
    "reveal": "Systemic under-resourcing, in which the control is skipped routinely across the operation under time pressure."
  },
  {
    "type": "clear",
    "patternId": "FFT-009",
    "patternName": "Insider Collusion",
    "text": "An employee has a connection to a counterparty.",
    "reveal": "An entirely innocent connection in an industry where local employment and supplier networks overlap heavily."
  },
  {
    "type": "flag",
    "patternId": "FFT-010",
    "patternName": "Transport Document Fraud",
    "text": "Proof of delivery signature cannot be attributed to any person authorised by the consignee to receive goods",
    "reveal": "A real indicator of Transport Document Fraud."
  },
  {
    "type": "flag",
    "patternId": "FFT-010",
    "patternName": "Transport Document Fraud",
    "text": "Document metadata, sequence number or timestamp is inconsistent with the movement it purports to evidence",
    "reveal": "A real indicator of Transport Document Fraud."
  },
  {
    "type": "flag",
    "patternId": "FFT-010",
    "patternName": "Transport Document Fraud",
    "text": "The same document image or reference appears against more than one movement",
    "reveal": "Reuse is one of the easiest patterns to detect automatically and one of the least often checked."
  },
  {
    "type": "flag",
    "patternId": "FFT-010",
    "patternName": "Transport Document Fraud",
    "text": "Condition or quantity annotations appear in different ink, hand, font or layer from the rest of the document",
    "reveal": "A real indicator of Transport Document Fraud."
  },
  {
    "type": "flag",
    "patternId": "FFT-010",
    "patternName": "Transport Document Fraud",
    "text": "Reservations about apparent condition are absent on taking over the goods but a claim later relies on pre-existing damage",
    "reveal": "A real indicator of Transport Document Fraud."
  },
  {
    "type": "flag",
    "patternId": "FFT-010",
    "patternName": "Transport Document Fraud",
    "text": "Only a photographed or retyped copy is ever provided and the original is said to be unavailable",
    "reveal": "Common in legitimate operations, so weak on its own; it matters because it removes the ability to test the other indicators."
  },
  {
    "type": "clear",
    "patternId": "FFT-010",
    "patternName": "Transport Document Fraud",
    "text": "An unattributable delivery signature.",
    "reveal": "Genuine receipt by agency staff, a temporary worker, or a third-party site operator whom the consignee does not have on record."
  },
  {
    "type": "clear",
    "patternId": "FFT-010",
    "patternName": "Transport Document Fraud",
    "text": "Handwritten annotations added to a consignment note.",
    "reveal": "Legitimate reservations recorded at handover, which is exactly what the document is designed for."
  },
  {
    "type": "clear",
    "patternId": "FFT-010",
    "patternName": "Transport Document Fraud",
    "text": "The same reference appearing twice.",
    "reveal": "A split delivery, a re-delivery after a failed attempt, or a documented partial movement."
  },
  {
    "type": "flag",
    "patternId": "FFT-011",
    "patternName": "Insurance Certificate Fraud",
    "text": "Certificate supplied as an image or editable document rather than confirmed directly by the insurer or broker",
    "reveal": "The core structural weakness. Verification at source removes most of this pattern at negligible cost."
  },
  {
    "type": "flag",
    "patternId": "FFT-011",
    "patternName": "Insurance Certificate Fraud",
    "text": "Insurer, broker or policy reference cannot be verified, or the insurer is not authorised in the relevant market",
    "reveal": "A real indicator of Insurance Certificate Fraud."
  },
  {
    "type": "flag",
    "patternId": "FFT-011",
    "patternName": "Insurance Certificate Fraud",
    "text": "Cover limits are exactly at, or suspiciously aligned with, the shipper's stated minimum",
    "reveal": "A real indicator of Insurance Certificate Fraud."
  },
  {
    "type": "flag",
    "patternId": "FFT-011",
    "patternName": "Insurance Certificate Fraud",
    "text": "Policy period ends before the contract term, or renewal evidence is never provided",
    "reveal": "A real indicator of Insurance Certificate Fraud."
  },
  {
    "type": "flag",
    "patternId": "FFT-011",
    "patternName": "Insurance Certificate Fraud",
    "text": "Cover excludes the commodity class, territory, equipment type or theft peril actually being carried",
    "reveal": "The exclusion is frequently the real exposure. A certificate can be perfectly genuine and still provide no cover for the movement at hand."
  },
  {
    "type": "flag",
    "patternId": "FFT-011",
    "patternName": "Insurance Certificate Fraud",
    "text": "Insurer declines on the basis of cancellation, non-disclosure or non-payment predating the loss",
    "reveal": "A real indicator of Insurance Certificate Fraud."
  },
  {
    "type": "clear",
    "patternId": "FFT-011",
    "patternName": "Insurance Certificate Fraud",
    "text": "Cover limits exactly matching the required minimum.",
    "reveal": "Entirely normal commercial behaviour, since operators buy to the requirement rather than above it."
  },
  {
    "type": "clear",
    "patternId": "FFT-011",
    "patternName": "Insurance Certificate Fraud",
    "text": "An unfamiliar insurer.",
    "reveal": "A legitimate specialist or regional transport insurer or mutual, of which there are many in European road freight."
  },
  {
    "type": "clear",
    "patternId": "FFT-011",
    "patternName": "Insurance Certificate Fraud",
    "text": "A certificate that has expired in the file.",
    "reveal": "An administrative lag in collecting renewal evidence where cover was in fact continuous."
  },
  {
    "type": "flag",
    "patternId": "FFT-012",
    "patternName": "Undisclosed Subcontracting Chain",
    "text": "Contract permits subcontracting without any obligation to disclose the identity of the performing party",
    "reveal": "This is a control design defect rather than a behavioural signal, and it is where the exposure originates."
  },
  {
    "type": "flag",
    "patternId": "FFT-012",
    "patternName": "Undisclosed Subcontracting Chain",
    "text": "Contracted volume is materially greater than the entity's own declared capacity, implying routine subcontracting",
    "reveal": "A real indicator of Undisclosed Subcontracting Chain."
  },
  {
    "type": "flag",
    "patternId": "FFT-012",
    "patternName": "Undisclosed Subcontracting Chain",
    "text": "Vehicle or driver at pickup belongs to an entity that does not appear anywhere in the shipper's records",
    "reveal": "The gate is the only place the real performing party reliably becomes visible."
  },
  {
    "type": "flag",
    "patternId": "FFT-012",
    "patternName": "Undisclosed Subcontracting Chain",
    "text": "Vehicle registration country and driver nationality pattern are inconsistent with the declared operator's establishment",
    "reveal": "A real indicator of Undisclosed Subcontracting Chain."
  },
  {
    "type": "flag",
    "patternId": "FFT-012",
    "patternName": "Undisclosed Subcontracting Chain",
    "text": "Claims, penalties or enforcement notices name an entity absent from the shipper's carrier master data",
    "reveal": "A real indicator of Undisclosed Subcontracting Chain."
  },
  {
    "type": "flag",
    "patternId": "FFT-012",
    "patternName": "Undisclosed Subcontracting Chain",
    "text": "Sanctions or adverse-media screening produces a hit on a party discovered only after an incident",
    "reveal": "By this point the exposure has already been carried, which is the whole problem with screening only tier one."
  },
  {
    "type": "clear",
    "patternId": "FFT-012",
    "patternName": "Undisclosed Subcontracting Chain",
    "text": "A subcontractor's vehicle performing the movement.",
    "reveal": "Disclosed and approved subcontracting, which is normal, lawful and often unavoidable in European road freight."
  },
  {
    "type": "clear",
    "patternId": "FFT-012",
    "patternName": "Undisclosed Subcontracting Chain",
    "text": "A foreign-registered vehicle on a domestic leg.",
    "reveal": "Lawful cabotage or a lawful combined-transport leg within the permitted limits."
  },
  {
    "type": "clear",
    "patternId": "FFT-012",
    "patternName": "Undisclosed Subcontracting Chain",
    "text": "Deep subcontracting.",
    "reveal": "A legitimate groupage or network model in which multiple operators handle successive legs by design."
  }
];
  if (typeof module !== 'undefined' && module.exports) module.exports = CARDS;
  else global.CARDS = CARDS;
})(typeof window !== 'undefined' ? window : globalThis);
