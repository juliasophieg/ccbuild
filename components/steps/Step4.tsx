import React from 'react'
import { useFormContext, useFieldArray, Controller } from 'react-hook-form'
import { TextField, Button, Box, MenuItem } from '@mui/material'

const Step4: React.FC = () => {
  const { control, register } = useFormContext()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'variations',
  })

  return (
    <Box>
      {fields.map((field, index) => (
        <Box key={field.id} mb={2}>
          <Controller
            control={control}
            name={`variations.${index}.pickup.availableDate`}
            render={({ field }) => (
              <TextField
                {...field}
                label='Pickup Available Date'
                type='date'
                variant='outlined'
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            )}
          />

          <Controller
            control={control}
            name={`variations.${index}.pickup.firstDeliveryDate`}
            render={({ field }) => (
              <TextField
                {...field}
                label='First Delivery Date'
                type='date'
                variant='outlined'
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            )}
          />

          <Controller
            control={control}
            name={`variations.${index}.location.house`}
            render={({ field }) => (
              <TextField
                {...field}
                label='House'
                variant='outlined'
                fullWidth
              />
            )}
          />
          <Controller
            control={control}
            name={`variations.${index}.location.room`}
            render={({ field }) => (
              <TextField {...field} label='Room' variant='outlined' fullWidth />
            )}
          />
          <Controller
            control={control}
            name={`variations.${index}.location.location`}
            render={({ field }) => (
              <TextField
                {...field}
                label='Location'
                variant='outlined'
                fullWidth
              />
            )}
          />

          {/* Accesaibility */}
          <Controller
            control={control}
            name={`variations.${index}.location.accesaibility`}
            render={({ field }) => (
              <TextField
                {...field}
                label='Accessibility'
                select
                variant='outlined'
                fullWidth
              >
                <MenuItem value='Lätt Åtkomlig'>Lätt Åtkomlig</MenuItem>
                <MenuItem value='Åtkomlig men planering och specialverktyg kan krävas'>
                  Åtkomlig men planering och specialverktyg kan krävas
                </MenuItem>
                <MenuItem value='Begränsad åtkomlighet'>
                  Begränsad åtkomlighet
                </MenuItem>
              </TextField>
            )}
          />

          {/* Dismantling */}
          <Controller
            control={control}
            name={`variations.${index}.location.dismantling`}
            render={({ field }) => (
              <TextField
                {...field}
                label='Dismantling'
                select
                variant='outlined'
                fullWidth
              >
                <MenuItem value='Enkel att demontera/demontering krävs ej'>
                  Enkel att demontera/demontering krävs ej
                </MenuItem>
                <MenuItem value='Demonterbar men specialverktyg kan krävas'>
                  Demonterbar men specialverktyg kan krävas
                </MenuItem>
                <MenuItem value='Begränsad demonterbarhet'>
                  Begränsad demonterbarhet
                </MenuItem>
              </TextField>
            )}
          />

          {/* Decision Location Fields */}
          <Controller
            control={control}
            name={`variations.${index}.decision.location1`}
            render={({ field }) => (
              <TextField
                {...field}
                label='Decision Location 1'
                variant='outlined'
                fullWidth
              />
            )}
          />
          <Controller
            control={control}
            name={`variations.${index}.decision.location2`}
            render={({ field }) => (
              <TextField
                {...field}
                label='Decision Location 2'
                variant='outlined'
                fullWidth
              />
            )}
          />
          <Controller
            control={control}
            name={`variations.${index}.decision.location3`}
            render={({ field }) => (
              <TextField
                {...field}
                label='Decision Location 3'
                variant='outlined'
                fullWidth
              />
            )}
          />
          <Controller
            control={control}
            name={`variations.${index}.decision.location4`}
            render={({ field }) => (
              <TextField
                {...field}
                label='Decision Location 4'
                variant='outlined'
                fullWidth
              />
            )}
          />

          {/* Status */}
          <Controller
            control={control}
            name={`variations.${index}.status`}
            render={({ field }) => (
              <TextField
                {...field}
                label='Status'
                select
                variant='outlined'
                fullWidth
              >
                <MenuItem value='Inventerad'>Inventerad</MenuItem>
                <MenuItem value='Inventerad - i byggnad'>
                  Inventerad - i byggnad
                </MenuItem>
                <MenuItem value='Inventerad - i lager/förråd'>
                  Inventerad - i lager/förråd
                </MenuItem>
                <MenuItem value='På rekonditionering'>
                  På rekonditionering
                </MenuItem>
                <MenuItem value='I lager'>I lager</MenuItem>
                <MenuItem value='Bevarad (slutstatus)'>
                  Bevarad (slutstatus)
                </MenuItem>
                <MenuItem value='Återbrukad i projektet (slutstatus)'>
                  Återbrukad i projektet (slutstatus)
                </MenuItem>
                <MenuItem value='Återbrukad externt av annan aktör (slutstatus)'>
                  Återbrukad externt av annan aktör (slutstatus)
                </MenuItem>
                <MenuItem value='Avfallshanterad (slutstatus)'>
                  Avfallshanterad (slutstatus)
                </MenuItem>
              </TextField>
            )}
          />

          <Button
            variant='contained'
            color='secondary'
            onClick={() => remove(index)}
          >
            Remove Variation
          </Button>
        </Box>
      ))}

      <Button
        variant='contained'
        onClick={() => append({ name: '', price: 0 })}
      >
        Add Variation
      </Button>
    </Box>
  )
}

export default Step4
