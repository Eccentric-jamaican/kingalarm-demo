"use client";

export default function HeroGrid() {
    // Create an 8x8 grid (64 cells)
    const gridSize = 8;
    const cells = Array.from({ length: gridSize * gridSize });

    return (
        <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
            {cells.map((_, i) => {
                const row = Math.floor(i / gridSize);
                const col = i % gridSize;

                // Calculate background position percentage
                // For 8x8 grid: 
                // col 0 = 0%, col 1 = 14.28%, ..., col 7 = 100%
                // Formula: (index / (total - 1)) * 100
                const xPos = (col / (gridSize - 1)) * 100;
                const yPos = (row / (gridSize - 1)) * 100;

                return (
                    <div
                        key={i}
                        className="relative border-[0.5px] border-white/5 group overflow-hidden bg-black/20"
                    >
                        <div
                            className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:brightness-150 bg-no-repeat"
                            style={{
                                backgroundImage: 'url("/hero-image.png")',
                                backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`,
                                backgroundPosition: `${xPos}% ${yPos}%`
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
}
