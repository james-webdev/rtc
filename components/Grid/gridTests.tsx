'use client'
import { Box } from '../Box'
import { Grid } from '.'

export const GridTests: React.FC = () => {
  return (
    <Box className="bg-blue-300">
      <span>4 X 4 X 4 Col Grid</span>

      <Grid gridAutoFlow="row-dense" debugGrid template="4x4x4">
        <Box padding="10" mt="10" mr="10">
          Item 10000
        </Box>
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 2
        </Box>
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 3
        </Box>
      </Grid>

      <span>3 X 3 X 3 X 3 Col Grid</span>

      <Grid template="3x3x3x3">
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 1
        </Box>
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 2
        </Box>
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 3
        </Box>
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 4
        </Box>
      </Grid>

      <span>6 X 6 Col Grid</span>
      <Grid debugGrid template="6x6">
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 1
        </Box>
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 2
        </Box>
      </Grid>

      <span>7 X 5 Col Grid</span>
      <Grid template="7x5">
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 1
        </Box>
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 2
        </Box>
      </Grid>

      <span>9 X 3 Col Grid</span>
      <Grid template="9x3">
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 1
        </Box>
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 2
        </Box>
      </Grid>

      <span>5 X 7 Col Grid</span>
      <Grid template="5x7">
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 1
        </Box>
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 2
        </Box>
      </Grid>

      <span>3 X 9 Col Grid</span>
      <Grid debugGrid template="3x9">
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 1
        </Box>
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 2
        </Box>
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 3
        </Box>
      </Grid>

      <span>10 X 2 Col Grid</span>
      <Grid template="10x2">
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 1
        </Box>
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 2
        </Box>
      </Grid>

      <span>12 Col Grid</span>
      <Grid template="12">
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 1
        </Box>
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 2
        </Box>
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 3
        </Box>
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 4
        </Box>
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 5
        </Box>
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 6
        </Box>
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 7
        </Box>
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 8
        </Box>
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 9
        </Box>
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 10
        </Box>
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 11
        </Box>
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 12
        </Box>
      </Grid>

      <span>8 X 4 Col Grid</span>
      <Grid template="8x4" gridAutoFlow="dense">
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 1
        </Box>
        <Box borderStyle="dashed" borderWidth="2" padding="10">
          Item 2
        </Box>
        <Box padding="10">Item 3</Box>
        <Box padding="10">Item 4</Box>
      </Grid>
    </Box>
  )
}
