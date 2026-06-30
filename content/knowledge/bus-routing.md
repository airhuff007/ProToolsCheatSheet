---
title: Bus Routing
description: Route audio between tracks using internal buses for submixes, sends, and parallel processing.
---

## What is a Bus?

A bus is an internal audio pathway in Pro Tools that carries a signal from one or more tracks to another track or to the hardware outputs. Buses are used for submixing, parallel processing, effects returns, and stem routing.

## Common Routing Uses

### Submix (Aux) Busing
1. Assign the **output** of multiple tracks to the same bus (e.g., "Bus 1-2").
2. Create an **Aux Input** track and set its **input** to that same bus.
3. The Aux Input receives the combined signal — apply group processing here.

### Send / Return (Parallel Effects)
1. Add a **Send** on a track, assign it to a bus (e.g., "Bus 5-6").
2. Create an **Aux Input** with its input set to "Bus 5-6".
3. Insert a reverb or delay on the Aux Input.
4. The send level controls the wet signal; the dry signal stays on the source track.

### Stem Routing
Assign instrument groups (Drums, Bass, Guitars, Vocals) to dedicated buses and Aux Inputs. Each Aux Input is a stem that can be printed to disk during a stem bounce.

## Hardware I/O vs. Buses

| | Hardware I/O | Internal Bus |
|---|---|---|
| Goes to physical output/input | ✅ | ❌ |
| For internal routing only | ❌ | ✅ |
| Requires audio interface | ✅ | ❌ |

## I/O Setup

Configure your buses in **Setup > I/O > Bus** tab. Name and organize them here so they appear clearly in every track's routing menu.

## Tips

- Keep bus naming consistent: "Drum Bus", "Vocal Bus", "FX Return 1".
- Use **VCA masters** in addition to Aux buses when you need group level control without summing the signal.
- Buses carry no latency in Pro Tools because routing is handled in the engine at the buffer level.
- Use **Output** tracks (HD/Ultimate only) for master bus processing before delivery.
